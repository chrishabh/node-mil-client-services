const cheerio = require("cheerio")
const axios = require("axios")


async function webScraping(req,res) {

    const axiosResponse = await axios.request({
        method: "GET",
        url: "https://geokeo.com/database/city/jm/",
        headers: {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36"
        }
    })

    const $ = cheerio.load(axiosResponse.data)
    const   city  =   [];
    // const ItemList =  $("body > main > div > table.table.table-hover.table-bordered > tbody > tr > td:nth-child(2)");
    // console.log(ItemList.length);
    // const i = 30;

    $("body > main > div > table.table.table-hover.table-bordered > tbody > tr > td:nth-child(2)").each((index,element) => {

        city[index] = $(element).text()
    })
    res.success(city);
}


module.exports = {
    webScrapingContoller: webScraping
}

