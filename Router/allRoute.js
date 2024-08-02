import express from "express"
import handleHome from "../controlers/home.js"
import handleKDrama from "../controlers/K-Drama.js"
import handleMovie from "../controlers/movie.js"
import handleSeries from "../controlers/series.js"
import handleChinese from "../controlers/chinese.js"
import handleAisa from "../controlers/aisa.js"
import handleSingleMovie from "../controlers/singleMovie.js"
import handleSearch from "../controlers/search.js"

const route = express.Router();

route.get("/home", handleHome);

route.get("/kdrama", handleKDrama);

route.get("/movie", handleMovie);

route.get("/series", handleSeries);

route.get("/chinese", handleChinese);

route.get("/asia", handleAisa);

route.post("/search", handleSearch);

route.post("/single", handleSingleMovie);

export default route;
