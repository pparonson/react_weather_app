const express = require('express');

// create the app
const app = express();

// express middleware
app.use((req, res, next) => {
  // openWeatherMap does NOT accept https, thus route to http
  if (req.headers['x-forwarded-proto'] === 'http') {
    next();
  } else {
    res.redirect(`http://${req.hostname}${req.url}`);
  }
});
app.use(express.static('public'));


// configure port with environment var for heroku or 3000 for localhost
const PORT = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Express server is running on port: ${PORT}`);
});
