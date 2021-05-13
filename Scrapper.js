const puppeteer = require('puppeteer');

async function getSellingExchangeRate(date='05/06/2008') {
     const browser = await puppeteer.launch({headless:false})
     const page = await browser.newPage()
     await page.goto('https://www.nbs.rs/kursnaListaModul/inputPeriod.faces?lang=eng');

     await page.evaluate(() => {
         const from = document.getElementById('inputPeriod:Od');
         from.value = '05/06/2008';
         const to = document.getElementById('inputPeriod:Do');
         to.value = '05/06/2008';
       });

     const[btn] = await page.$x('//*[@id="inputPeriod:buttonShow"]');
     await btn.click()

    const cookiesObject = await page.cookies()
    const excPage = await browser.newPage()
    await excPage.goto(`https://www.nbs.rs/kursnaListaModul/inputPeriod.faces;jsessionid=${cookiesObject[0].value}`);

    //console.log(res)
    
    // const cookiesObject = await page.cookies()
    // const excPage = await browser.newPage()
    // await excPage.goto(`https://www.nbs.rs/kursnaListaModul/naZeljeniDan.faces;jsessionid=${cookiesObject[0].value}`);
    // const[sellExcRate] = await page.$x('/html/body/div/form/div[1]/div/div/table/tbody/tr[1]');
    
    //  await page.goto(`https://www.nbs.rs/kursnaListaModul/naZeljeniDan.faces;jsessionid=${cookiesObject[0].value}`); 
    // browser.close();
}

getSellingExchangeRate();