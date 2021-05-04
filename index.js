const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/products', (req, res) => {
  res.send('Hello World!')
});