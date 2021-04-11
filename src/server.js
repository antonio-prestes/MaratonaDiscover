const express = require('express'); 
const server = express();
const routes = require("./routes")
const path = require("path")

// usando template engine 
server.set('view engine', 'ejs')

// habilitar arquivos estáticos na public
server.use(express.static("public"))

// mudar localização da pasta views
server.set('views', path.join(__dirname, 'views'))

// reuisição do body
server.use(express.urlencoded({ extended: true }))

// utilizar rotas
server.use(routes)
server.listen(3000, () => console.log('rodando'))

