const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello from CI/CD!');
});

module.exports = app;
