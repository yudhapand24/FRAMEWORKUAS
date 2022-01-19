const { response } = require("express");
const express = require("express");
const KayuRouter = require("./router/Kayu");
const app = express();


app.use(express.json())
app.use(express.urlencoded({
    extended: true
}));

var myLogger = function(req, res, next) {
    console.log("LOGGED");
    next();
};
app.use(myLogger);

const requestTime = function(req, res, next) {
    date = new Date();
    console.log(date);
    next();
}
app.use(requestTime);
app.set('view engine', 'ejs')

app.get("/", function(req, res) {
    const tanggal = "Hai Selamat Datang Di Perkayuan GAESS!!! </br>" + "<p><small>Rquest at:" + date + "</small>";
    res.send(tanggal);
});
app.use(KayuRouter)

app.get("/", function(req, res) {
    const Kayu = {
        No: 0001,
        Nama: "Kayu",
    };
    respon.render('home')
});

app.listen(3000, function() {
    console.log('server berjalan lancar');
});