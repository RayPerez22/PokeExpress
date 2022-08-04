const React = require('react')

class Edit extends React.Component {
  render() {
    const pokemon = this.props.pokemon
    return (
        <html>
            <div>
                <h1>Edit</h1>
                {/* NOTE: action will be the route, method will be the HTTP verb */}
                <form action={`/pokemon/${pokemon.id}?_method=PUT`} method="POST">
                Name: <input type="text" name="name" /><br/>
                <input type="submit" name="" value="Edit Pokemon"/>
                </form>
                <a href="/pokemon">Back</a>
            </div>
        </html>
        )
    }
  }

module.exports = Edit