const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()
const Pokemon = require('./models/pokemon.js')
const app = express()
const port = process.env.PORT || 3003


mongoose.connect(process.env.MONGO_URI);

mongoose.connection.once('open', () => {
    console.log('connected to mongo');
});

//middleware
app.use(express.urlencoded({extended: false}))
app.use((req, res, next) => {
    console.log(`I run for all routes`);
    next();
 });


//setting up our views
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

//our routes
app.get('/',(req, res) =>{
    res.send('Welcome to the Pokemon App!')
})

app.get('/pokemon/',(req, res) =>{
    Pokemon.find({}, (error, allPokemon)=>{
           // res.render('pokemon')
           res.render('Index', { 
            pokemon: allPokemon
        })
    })
})

app.post('/pokemon/', (req, res)=>{
    Pokemon.create(req.body, (error, createdPokemon)=>{
        // res.send(createdPokemon)
        res.redirect('/pokemon')
    })
})

//new
app.get('/pokemon/new', (req, res) => {
    res.render('New')//super simplified because we don't have a database
})


//show
app.get('/pokemon/:id',(req, res) => {
    console.log(req.params.id)
    Pokemon.findById(req.params.id, (err, foundPokemon)=>{
        res.render('Show', {
            pokemon: foundPokemon
        })
    })
})




app.listen(port, () => {
    console.log(`*** Listening on http://localhost:${port} ***`)
}) 