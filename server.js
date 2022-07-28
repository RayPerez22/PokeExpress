const express = require('express')
require('dotenv').config()
const pokemon = require('./models/pokemon.js')
const app = express()
const port = process.env.PORT || 3003


//our routes
app.get('/',(req, res) =>{
    res.send('Welcome to the Pokemon App!')
})

app.get('/pokemon/',(req, res) =>{
    res.send('Pokemon')
})




app.listen(port, () => {
    console.log(`*** Listening on http://localhost:${port} ***`)
}) 