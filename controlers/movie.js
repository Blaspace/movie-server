const axios = require("axios");
const cheerio = require("cheerio");

const handleMovie = async (req, res) => {
  const list = [];
  const URL = "https://nkiri.com/category/international/";
  const data = await axios(URL);
  const html = data.data;
  const $ = cheerio.load(html);
  $(".blog-entry-inner").each((i, value) => {
    const title = $(value).find(".blog-entry-title").text();
    const url = $(value).find("a").attr("href");
    const date = $(value).find(".blog-entry-date").text();
    const img = $(value).find("img").attr("src");
    list.push({ title, url, img });
  });
  res.send(list);
};

module.exports = handleMovie;
