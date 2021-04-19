const Job = require('../model/Job')
const Profile = require('../model/Profile')
const JobUtils = require('../utils/JobUtils')

module.exports = {
    async index(req, res) {
        const jobs = await Job.get()
        const profile = await Profile.get()
        let statusCount = {
            progress: 0,
            done: 0,
            total: jobs.length
        }

        let jobTotalHours = 0

        const updatedJobs = jobs.map((job) => {
            // ajustes no job
            const remaining = JobUtils.remainingDays(job)
            const status = remaining <= 0 ? 'done' : 'progress'

            // status = done
            // statusCount[done]
            // somando a quantidade de status
            statusCount[status] += 1;

            jobTotalHours[status] += 1;

            // se o status do job for progress adicionar o daily hours no total de horas livres
            // para depois diminuir com o horas por dia
            if (status == 'progress'){
                jobTotalHours += Number(job["daily-hours"])
            }

            return {
                ...job,
                remaining,
                status,
                budget: JobUtils.calculateBudget(job, profile["value-hour"])
            }
        })
        // quantidade de horas que quero trabalhar
        // MENOS
        // quantidade de horas de cada job em progress
        const freeHours = profile["hours-per-day"] - jobTotalHours;

        return res.render("dash", {
            jobs: updatedJobs,
            profile: profile,
            statusCount: statusCount,
            freeHours: freeHours,
        })
    }
}

