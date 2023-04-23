const axios = require("axios");
const cheerio = require("cheerio");

export default async function getMessiStat(req:any, res:any) {
  const url = "https://messi.starplayerstats.com/en";
  let allStats = [];

  await axios(url).then((response:any) => {
    const html_data = response.data;
    const $ = cheerio.load(html_data);

    const selectedElem =
      "#home > #totals > .wrap:last > .owl-carousel > .slide > a ";

    allStats = $(selectedElem)
      .map((i:any, el:any) => {
        return $(el)
          .text()
          .match(/(\d+\.?\d*)/g);
      })
      .get();

    return res.status(200).json({
      result: allStats,
    });
  });
}