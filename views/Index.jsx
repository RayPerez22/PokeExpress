const React = require('react')
const myStyle = {
    color: '#ffffff',
    backgroundColor: '#000000',
  };

  
class Index extends React.Component {
    render() {
        const { pokemon } = this.props
        return (
            <div>
                <div  style={myStyle}><h1>See All The Pokemon!</h1></div>
                
               <div>
               <ul>
                    {pokemon.map((pokemon) => {
                        return(
                            <li>
                                
                                <a href={`/pokemon/${pokemon.id}`}>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
                                    
                                </a>
                            </li>
                        )
                    })}
                </ul>
                <nav>
                    <a href="/pokemon/new">Create a New Fruit</a>
                </nav>
               </div>
            </div>
        )
    }
}
module.exports = Index