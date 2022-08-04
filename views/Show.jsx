const React = require('react')
class Show extends React.Component {
  render () {
   const pokemon = this.props.pokemon
   console.log(pokemon)
    return (
      <html>
        <div>
          <h1> Gotta Catch 'Em All </h1>
          <h2>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h2>
          <img src={`http://img.pokemondb.net/artwork/${pokemon.name.toLowerCase()}.jpg`}></img>
          <a href="/pokemon">Back</a>
          
        </div>
      </html>
      )
     }
   }


module.exports = Show

