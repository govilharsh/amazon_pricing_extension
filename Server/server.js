const express = require('express')
const app = express()
const port = 3000

const cheerio = require('cheerio');
const got = require('got');

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})





const vgmUrl= 'https://www.vgmusic.com/music/console/nintendo/nes';

const isMidi = (i, link) => {
  // Return false if there is no href attribute.
  if(typeof link.attribs.href === 'undefined') { return false }

  return link.attribs.href.includes('.mid');
};

const noParens = (i, link) => {
  // Regular expression to determine if the text has parentheses.
  const parensRegex = /^((?!\().)*$/;
  return parensRegex.test(link.children[0].data);
};

(async () => {
  const response = await got(vgmUrl);
  const $ = cheerio.load(response.body);

  $('a').filter(isMidi).filter(noParens).each((i, link) => {
    const href = link.attribs.href;
    console.log(href);
  });
})();
