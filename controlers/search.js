const cheerio = require("cheerio");
const axios = require("axios");

const handleSearch = async (req, res) => {
  const { url } = req.body;
  const list = [];
  const URL = `https://nkiri.com/?s=${url}&post_type=post`;
  console.log(URL);
  const data = await axios(URL);
  const html = data.data;
  const $ = cheerio.load(html);
  $(".search-entry-inner").each((i, value) => {
    const title = $(value).find(".search-entry-title").text();
    const url = $(value).find("a").attr("href");
    const img = $(value).find("img").attr("src");
    list.push({ title, url, img });
  });
  res.send(list);
};

module.exports = handleSearch;
