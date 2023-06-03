const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

const port = process.env.PORT || 8082;

// Connect Database
connectDB();

app.get('/', (req, res) => res.send('Hello world!'));


app.listen(port, () => console.log(`Server running on port ${port}`));