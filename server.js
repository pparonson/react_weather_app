const express = require('express');

// create the app
const app = express();

app.use(express.static('public'));

const port = 3000;
app.listen(port, () => {
  console.log(`Express server is running on port: ${port}`);
});
