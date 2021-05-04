const express = require('express');
const fs = require('fs')
const app = express();
const port = 3000;

//app.use(express.static('public'));

app.get('/products', (req, res) => {
  try {
    const data = fs.readFileSync('products.json', 'utf8')
    res.setHeader("Content-Type", "application/json; charset=UTF-8")
    res.send(data)
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
});

app.listen(port, function () {
    console.log('Listening on port 3000...')
})