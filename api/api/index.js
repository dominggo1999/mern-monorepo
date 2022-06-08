const express = require('express');

const app = express();

app.get('/api', (req, res) => {
  res.send('<h1>Hello World</h1>');
});

app.get('/api/hello', (req, res) => {
  res.send({
    message: 'Hello World',
    timestamp: new Date(),
  });
});

// If using serverful than init server
if (process.env.SERVERFUL) {
  const PORT = process.env.PORT || 3001;

  app.listen(PORT, (err) => {
    if (err) console.error(err);
    console.log(`Success! Your application is running on  http://localhost:${PORT}/`);
  });
}

module.exports = app;
