const express = require('express');
const app = express();

// Home Page
app.get('/', (req, res) => {
  res.send(`
    <html>
      <head><title>Home</title></head>
      <body>
        <nav>
          <a href="/">Home</a> |
          <a href="/about">About</a> |
          <a href="/contact">Contact</a>
        </nav>
        <h1>Welcome to Home Page</h1>
      </body>
    </html>
  `);
});

// About Page
app.get('/about', (req, res) => {
  res.send(`
    <html>
      <head><title>About</title></head>
      <body>
        <nav>
          <a href="/">Home</a> |
          <a href="/about">About</a> |
          <a href="/contact">Contact</a>
        </nav>
        <h1>About Us</h1>
      </body>
    </html>
  `);
});

// Contact Page
app.get('/contact', (req, res) => {
  res.send(`
    <html>
      <head><title>Contact</title></head>
      <body>
        <nav>
          <a href="/">Home</a> |
          <a href="/about">About</a> |
          <a href="/contact">Contact</a>
        </nav>
        <h1>Contact Page</h1>
      </body>
    </html>
  `);
});

app.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});