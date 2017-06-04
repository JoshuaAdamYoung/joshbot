var Twit = require('twit');
var Snoo = require('snoowrap');
var WatsonNLU = require('watson-developer-cloud/natural-language-understanding/v1.js');

var w = new WatsonNLU({
  "url": process.env.W_URL,
  "username": process.env.W_USR,
  "password": process.env.W_P,
  "version_date": WatsonNLU.VERSION_DATE_2016_01_23
})

var t = new Twit({
  consumer_key: process.env.TWITBOT_CK,
  consumer_secret: process.env.TWITBOT_CS,
  access_token: process.env.TWITBOT_AT,
  access_token_secret: process.env.TWITBOT_ATS,
  timeout_ms: 60000
})

var r = new Snoo({
  "client_id": process.env.REDBOT_CI,
  "client_secret": process.env.REDBOT_CS,
  "refresh_token": process.env.REDBOT_RT,
  "user_agent": process.env.REDBOT_UA,
  "username": process.env.REDBOT_U,
  "password": process.env.REDBOT_P,
  "redirect_uri": process.env.REDBOT_RDR
})

const nluOptions = {
      url: "https://apnews.com/3e9965cb52514e70abaac552c4d7a172?utm_campaign=SocialFlow&utm_source=Twitter&utm_medium=AP",
      features: {
        emotion: {},
        concepts: {}
      }
    };

w.analyze(nluOptions, function(err, res) {
      if (err) {
        console.log(err);
        return;
      }
      console.log(res.emotion.document.emotion);
    });

// bot.post('statuses/update', {status: 'Hello, Twitter!'})
/* r.getHot('worldnews').then(listing => {
  console.log(listing[0]);
  t.post('statuses/update', {status: 'Top on #reddit: ' + listing[1].title.substring(0, 123)})
}).catch(err => {
  console.log(err)
});
*/
