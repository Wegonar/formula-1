const express = require('express')
const dotenv = require('dotenv').config()
const path = require('path');
const fs = require('fs');

const app = express()
const PORT = process.env.PORT || 5000

const dir = path.join(__dirname, 'public/images');
app.use('/static', express.static(dir))

const dataPath = path.join(__dirname, 'drivers.json');
let drivers = JSON.parse(fs.readFileSync(dataPath).toString())

const usedNumbers = new Set()
drivers = drivers.map(driver => {
    let randomPlace = Math.floor((Math.random() * drivers.length) + 1)
    while (usedNumbers.has(randomPlace)) {
        randomPlace = Math.floor((Math.random() * drivers.length) + 1)
    }
    usedNumbers.add(randomPlace)
    return {
        ...driver,
        imgUrl: `/static/${driver.code.toLowerCase()}.png`,
        place: randomPlace
    }
})


app.get('/api/drivers', (req, res) => {
    res.send(drivers)
})

app.listen(PORT, () => console.log('Server started.'))
