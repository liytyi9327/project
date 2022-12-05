const express = require("express");
const app = express();
const https = require("https");
const path = require("path");



//const { MongoClient } = require("mongodb");
//const url ="mongodb://localhost:27017/";
//const ejs = require('ejs');
/* login
const session = require('express-session');
app.use(session({
    secret: 'secretKey',
    resave: false,
    saveUninitialized: true,
  }))
app.use('/admin', require('routes/admin'));  
*/
//app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));


app.get("/", (req, res)=>{
    const weather_url = "https://api.openweathermap.org/data/2.5/weather?lat=22.2793278&lon=114.1628131&appid=54f6084ff415f3eec2dd093e8d41109d#&units=metric";
    https.get(weather_url, (resp)=>{
        console.log(resp.statusCodess);

        resp.on("data", (data)=>{
            const weather_data = JSON.parse(data);
            const main = weather_data.weather[0].main;
            //const icon = weather_data.weather[0].icon;
            //const icon_url = "http://openweathermap.org/img/wn/" + icon + "@2x.png";
            //res.send("<img scr=" + icon_url + ">");
            res.send("<h1>current main is: " + main + "</h1>");
        })
    })
})


/*app.get("/homepage", (req, res)=>{
    res.sendFile(__dirname, "/homepage.html");
})*/


app.listen(2222, function(){
    console.log("port is: 2222");
});