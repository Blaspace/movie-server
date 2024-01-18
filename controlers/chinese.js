const axios = require("axios");
const cheerio = require("cheerio");

const handleChinese = async (req, res) => {
  const list = [];
  const URL = "https://dramakey.com/chinese-drama-menu-dramakey/";
  const data = await axios(URL);
  const html = data.data;
  const $ = cheerio.load(html);
  $(".eael-grid-post").each((i, value) => {
    const title = $(value).find(".eael-grid-post-link").text();
    const url = $(value).find("a").attr("href");
    const img = $(value).find("img").attr("src");
    list.push({ title, url, img });
  });
  res.send(list);
};

module.exports = handleChinese;
