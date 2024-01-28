
const express = require('express');
const axios = require('axios');

const app = express();
const port = 3000;

app.get('/dl', async (req, res) => {

  const link = "https://www.instagram.com/reel/C0CQMjeKiYQ/?igshid=MzRlODBiNWFlZA==&token=14c";
  const x = encodeURIComponent(link);
  try {
    const response = await axios.post('https://allinonedownloader.com/system/be9cbb07acbbcd2.php', `url=${x}`, {
      headers: {
        'authority': 'allinonedownloader.com',
        'accept': '*/*',
        'accept-language': 'en-US,en;q=0.9',
        'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
        'cookie': 'crs_ALLINONEDOWNLOADER_COM=blah; _gid=GA1.2.1586104814.1701110150; adcashufpv3=92230948621426166872063212824; aio-wop=yes; PHPSESSID=glor3uiu4ts2e3ppmmp2qkpat7; _ga_BKWXCG81DF=GS1.1.1701230326.3.0.1701230326.0.0.0; _ga=GA1.2.1080510184.1701110150; _gat_gtag_UA_4276855_11=1; __gads=ID=921e2ee7fe68884c:T=1701110150:RT=1701230326:S=ALNI_MY03g5RORixdw16HQFNY_hu2qmSTw; __gpi=UID=00000c9afbfb359f:T=1701110150:RT=1701230326:S=ALNI_MZGYL7O_jwGx6hfS3ommpgkbdwkCg',
        'origin': 'https://allinonedownloader.com',
        'referer': 'https://allinonedownloader.com/',
        'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120"',
        'sec-ch-ua-mobile': '?1',
        'sec-ch-ua-platform': '"Android"',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-origin',
        'user-agent': 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Mobile Safari/537.36',
        'x-requested-with': 'XMLHttpRequest'
      }
    });

    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
