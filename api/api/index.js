require('dotenv').config();

const express = require('express');
const cors = require('cors');

const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // based on body parser
app.use(express.urlencoded({ extended: true }));

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
