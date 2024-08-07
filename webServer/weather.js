// Required Modules
const path = require("path");
const express = require("express");
const hbs = require("hbs");
const geoCode = require("./utils/geocode");
const { title } = require("process");

// Initialize App
const app = express();
const publicDirectoryPath = path.join(__dirname, "public");
const viewsDirectoryPath = path.join(__dirname, "views");
const partialsPath = path.join(__dirname, "partials");

// App Configurations`
app.use(express.urlencoded({ extended: false }));
app.set("view engine", "hbs");
app.use(express.static(publicDirectoryPath));
app.set("views", viewsDirectoryPath);
hbs.registerPartials(partialsPath);

// App Routes
app.get("/home", (req, res) => {
  res.render("home", {
    title: " Welcome to George's Weather App",
    name: "george Otemure",
    submit: "Check Weather Status",
  });
});

app.get("/login", (req, res) => {
  res.render("login", {
    name: "login",
  });
});
app.get("/signup", (req, res) => {
  res.render("signup");
});

app.get("/404/*", (req, res) => {
  res.render("404", {
    title: "404",
    errorMessage: "page not found",
  });
});

app.post("/search-weather", async (req, res) => {
  const data = await geoCode(req.body.city);
  res.render("show", {
    title: "Your Weather Result:",
    weatherData: data,
    desc: data.weather[0].main,
    icon: data.weather[0].icon,
  });
});
app.get("*", (req, res) => {
  res.send("404 ERROR");
});

app.listen(3001, () => {
  console.log("server is up on  port 3001");
});
