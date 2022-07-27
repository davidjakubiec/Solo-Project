const express = require('express');
const app = express();
const path = require('path');

// uncomment the below for proxy challenge



app.get('/', (req, res) => {
  console.log('test!!!!!!!')
  return res.status(200).sendFile(path.join(__dirname, '../dist/index.html'));
});

app.listen(3000);