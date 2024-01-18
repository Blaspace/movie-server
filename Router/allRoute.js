const express = require("express");
const handleHome = require("../controlers/home");
const handleKDrama = require("../controlers/K-Drama");
const handleMovie = require("../controlers/movie");
const handleSeries = require("../controlers/series");
const handleChinese = require("../controlers/chinese");
const handleAisa = require("../controlers/aisa");
const handleSingleMovie = require("../controlers/singleMovie");
const handleSearch = require("../controlers/search");

const route = express.Router();

route.get("/home", handleHome);

route.get("/kdrama", handleKDrama);

route.get("/movie", handleMovie);

route.get("/series", handleSeries);

route.get("/chinese", handleChinese);

route.get("/asia", handleAisa);

route.post("/search", handleSearch);

route.post("/single", handleSingleMovie);

module.exports = route;
