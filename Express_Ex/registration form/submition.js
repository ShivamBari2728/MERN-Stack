const express = require('express');
const path = require('path');

const app = express();

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname,'Home.html'));
});

app.post('/submit', (req, res) => {
  const { name, email, rollno } = req.body;

  res.send(`
    <html>
      <head><title>Submitted Data</title></head>
      <body>
        <h2>Registration Successful!</h2>

        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Roll No:</b> ${rollno}</p>

        <br>
        <a href="/">Go Back</a>
      </body>
    </html>
  `);
});
app.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});