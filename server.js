const express = require('express')
const app = express()
const port = process.env.PORT || 3003

app.get('/',(req, res) =>{
    res.send('Welcome to the Pokemon App!')
})




app.listen(port, () => {
    console.log(`*** Listening on http://localhost:${port} ***`)
}) 