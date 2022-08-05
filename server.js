const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()
const Pokemon = require('./models/pokemon.js')
const app = express()
const port = process.env.PORT || 3003
const methodOverride = require('method-override')//method override for delete
const pokemonData = require('./utilities/pokemonData')

//DB connection
mongoose.connect(process.env.MONGO_URI);

mongoose.connection.once('open', () => {
    console.log('connected to mongo');
});

//middleware
app.use(express.urlencoded({extended: false}))

app.use(methodOverride('_method'))

app.use((req, res, next) => {
    console.log(`I run for all routes`);
    next();
 });

//seed route
app.get('/pokemon/seed', (req, res) => {
    //Comment the line if you don't want to delete your whole entire collection
    // Pokemon.deleteMany({}) -> not working for right now
    //Crete a list of pokemon into our database
    Pokemon.create(pokemonData)
    res.redirect('/pokemon')
})



//setting up our views
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

//our routes
app.get('/',(req, res) =>{
    res.send('Welcome to the Pokemon App!')
})

app.get('/pokemon/', (req, res) =>{
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
app.get('/pokemon/:id', (req, res) => {
    console.log(req.params.id)
    Pokemon.findById(req.params.id, (err, foundPokemon)=>{
        res.render('Show', {
            pokemon: foundPokemon
        })
    })
})

//delete route
app.delete('/pokemon/:id', (req,res) => {
    console.log('we are deleting')
    Pokemon.findByIdAndRemove(req.params.id, (err, data) => {
        res.redirect('/pokemon')
    })
})
// altenative way
// app.delete('/pokemon/:id',(req,res) => {
//     Pokemon.findByIdAndRemove(req.params.id)
//         res.redirect('/pokemon')    
// })

app.get('/pokemon/:id/edit', (req, res) => {
    Pokemon.findById(req.params.id, (error, foundPokemon) => {
        if(!error) {
            res.render('Edit', {
                pokemon: foundPokemon
            })
        }else {
            res.send({
                message: error.message
            })
        }
    })
})


// Edit:Update route
app.put('/pokemon/:id', (req, res) => {
    Pokemon.findByIdAndUpdate(req.params.id, req.body, {
        new: true
    }, (error, pokemon) => {
        res.redirect(`/pokemon/${req.params.id}`)
    })
})


app.listen(port, () => {
    console.log(`*** Listening on http://localhost:${port} ***`)
}) 