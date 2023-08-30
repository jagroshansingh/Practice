const express = require('express');
const puppeteer = require('puppeteer');
const app = express();
const port = 8000;
const cors=require('cors')

app.use(cors())

app.get('/scrape', async (req, res) => {
  try {
    const browser = await puppeteer.launch({headless:'new'});
    const page = await browser.newPage();

    // Adjust the timeout and waitUntil options as needed
    await page.goto('https://www.wow4u.com/quote-of-the-day-daily-positive-words-of-wisdom/', {
      waitUntil: 'domcontentloaded', // You can also use 'networkidle0' or 'networkidle2'
      timeout: 30000, // Maximum timeout in milliseconds
    });

    // await page.waitForSelector('figure');
    // const figureElements = await page.$$('figure');
    // console.log(figureElements)
    // Find the image element's source
    const imageUrl = await page.$eval('figure.wp-block-image img', img => img.src);

    console.log(imageUrl)

    // Fetch the image
    // const imageBuffer = await page.goto(imageUrl);

    await browser.close();

    // Set the appropriate content type header for the image
    // res.setHeader('Content-Type', 'image/jpeg');
    res.send(imageUrl);
  } catch (error) {
    console.error('Error scraping:', error);
    res.status(500).json({ error: 'An error occurred while scraping.' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
