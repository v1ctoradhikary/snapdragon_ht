const express = require("express");
const app = express();
const path = require("path"); // Require the path module

const methodOverride = require("method-override");

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "/public")));
app.set("views", path.join(__dirname, "views"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

app.listen(8080, () => {
    console.log("Server is listening on port 8080");
});

app.get("/home", (req, res) => {
    res.render("home.ejs");
});

app.get("/login", (req, res) => {
    res.render("login.ejs");
});

app.post("/login", (req, res) => {
    let data = req.body; // Accessing the entire request body
    console.log(data);
    res.render("home.ejs",{data}); // Redirecting without passing data in URL
});

app.get("/thanos",(req,res)=>{
    res.render("thanosGame.ejs");
});

app.get("/hulk",(req,res)=>{
    res.render("hulk.ejs");
});

app.get("/social",(req,res)=>{
    res.render("social.ejs");
});

app.get("/exclusive",(req,res)=>{
    res.render("exclusive1.ejs");
});

// app.get("/spider",(req,res)=>{
//     res.render("spiderman.ejs");
// });

app.get("/spider",(req,res)=>{
    res.render("spider.ejs");
})

