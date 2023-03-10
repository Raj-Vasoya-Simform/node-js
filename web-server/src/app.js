const path = require("path");
const express = require("express");
const hbs = require("hbs");
const geocode = require("./utils/geocode");
const weather = require("./utils/weather");

const app = express();

// Define paths for Express config
const publicPath = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");

// Setup handlebars engine and views location
app.set("view engine", "hbs");
app.set("views", viewsPath);
hbs.registerPartials(partialsPath);

// Setup static directory to serve
app.use(express.static(publicPath));

app.get("", (req, res) => {
  res.render("index", {
    title: "Weather",
    name: "Raj Vasoya",
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    title: "About Me",
    img: "/img/Photo.jpg",
    name: "Raj Vasoya",
  });
});

app.get("/help", (req, res) => {
  res.render("help", {
    title: "Help",
    name: "Raj Vasoya",
  });
});

app.get("/weather", (req, res) => {
  if (!req.query.address) {
    return res.send({
      error: "You must provide an address.",
    });
  }

  geocode(
    req.query.address,
    (error, { latitude, longitude, location } = {}) => {
      if (error) {
        return res.send({ error: error });
      }

      weather(latitude, longitude, (error, weatherData) => {
        if (error) {
          return res.send({ error });
        }

        res.send({
          forecast: weatherData,
          location,
          address: req.query.address,
        });
      });
    }
  );
});

app.get("/product", (req, res) => {
  if (!req.query.search) {
    return res.send({
      error: "You must provide a search term.",
    });
  }
  console.log(req.query.search);
  res.send({
    products: [],
  });
});

app.get("/help/*", (req, res) => {
  res.render("404", {
    title: "404",
    name: "Raj Vasoya",
    errorMsg: "Help article not found!.",
  });
});

app.get("*", (req, res) => {
  res.render("404", {
    title: "404",
    name: "Raj Vasoya",
    errorMsg: "404 Page not",
  });
});
app.listen(3000, () => {
  console.log("Server is up on port 3000.");
});
