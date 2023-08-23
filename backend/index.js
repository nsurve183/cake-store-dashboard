

const express = require('express');
const connectToMongo = require('./connect');
const cors = require('cors');


connectToMongo();

const app = express()
const port = 4000;

app.use(cors());
app.use(express.json())

app.use('/api/adminauth', require('./routes/adminAuth'))

app.listen(port , () => {
    console.log(`Cake store dashboard app listening on port http://localhost:${port}`)
})