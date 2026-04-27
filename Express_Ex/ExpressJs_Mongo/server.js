const connectDB = require("./src/config/db.js");
const express = require('express');
const dotenv = require('dotenv');

dotenv.config(); //reads .env file 
connectDB(); // Connect to MongoDB

const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//use error handeler below 

//

app.get('/', (req, res) => {
    res.json({ message: 'Product API is running' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});