const express = require('express');

// create the app
const app = express();
// configure port with environment var for heroku or 3000 for localhost
const PORT = process.env.PORT || 3000;
console.log(process.env.PORT);

// express middleware pattern to do something with requests
app.use((req, res, next) => {
  if (req.headers['x-forwarded-proto'] === 'http') {
    console.log(req.headers['x-forwarded-proto']);
    next();
  } else {
    console.log(`hostname: ${req.hostname}, url: ${req.url}`);
    res.redirect(`http://${req.hostname}${req.url}`)
  }
});

app.use(express.static('public'));



app.listen(PORT, () => {
  console.log(`Express server is running on port: ${PORT}`);
});
