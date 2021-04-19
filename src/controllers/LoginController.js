
module.exports = {
    async login(req, res) {
        return res.render("login")
    }
}
    let firebaseConfig = {
        apiKey: "AIzaSyBUUtWqvBcvauPBi8pVgI1MSXiBqNuyInA",
        authDomain: "authjobs.firebaseapp.com",
        projectId: "authjobs",
        storageBucket: "authjobs.appspot.com",
        messagingSenderId: "671640017449",
        appId: "1:671640017449:web:0688c8330ad9d86c089a38",
        measurementId: "G-5DV2S3BPEE"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();

}

