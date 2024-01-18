const axios = require("axios");
const cheerio = require("cheerio");

const handleSingleMovie = async (req, res) => {
  const { url } = req.body;
  console.log(url);
  const list = [];
  const data = await axios(url);
  const html = data.data;
  const $ = cheerio.load(html);
  const synopsis = $(".elementor-widget-container").find("p").text();
  const size = $(".elementor-alert-description").text();
  const links = [];
  const youtube = $("iframe").attr("src");

  $(".elementor-section").each((i, value) => {
    const link = $(value).find(".elementor-button-link").attr("href");
    const text = $(value).find("h2").text();
    links.push({ link, text });
  });
  $(".eael-grid-post").each((i, value) => {
    const title = $(value).find(".eael-grid-post-link").text();
    const url = $(value).find(".eael-grid-post-link").attr("href");
    const img = $(value).find("img").attr("src");
    list.push({ title, url, img });
  });
  const singleMovie = { synopsis, size, links, youtube, movies: list };
  res.send(singleMovie);
};

module.exports = handleSingleMovie;
