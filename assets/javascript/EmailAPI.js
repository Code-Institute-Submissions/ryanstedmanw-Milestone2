var api_key = 'key-8d22a7d281cc05f78b69124d938fde50-7cd1ac2b-74a899be';
var domain = 'sandboxfb8d6b0ba15540c595852b3b0752f822.mailgun.org';
var mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});
 
var data = {
  from: 'Excited User <ryanstedmanw@gmail.com>',
  to: 'ryanstedmanw@gmail.com',
  subject: 'Hello',
  text: 'Testing some Mailgun awesomeness!'
};
 
mailgun.messages().send(data, function (error, body) {
  console.log(body);
});