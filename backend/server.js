const express = require('express')
const dotenv = require('dotenv').config()
const path = require('path');
const fs = require('fs');

const app = express()
const PORT = process.env.PORT || 5000

const dir = path.join(__dirname, 'public');
app.use(express.static(dir))

const dataPath = path.join(__dirname, 'drivers.json');
const drivers = JSON.parse(fs.readFileSync(dataPath).toString())

app.get('/api/drivers', (req, res) => {
    res.send(drivers)
})

app.listen(PORT, () => console.log('Server started.'))
