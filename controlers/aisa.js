import axios from "axios";
import cheerio from "cheerio";

const handleAisa = async (req, res) => {
  try{
  const list = [];
  const URL = "https://nkiri.com/category/asian-movies/";
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
}catch(err){
  console.log(err)
}
};

export default handleAisa;
