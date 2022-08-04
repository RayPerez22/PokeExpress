const React = require('react')

class New extends React.Component {
  render() {
    return (
      <html>
        <div>
            <h1>New Pokemon Page</h1>
            {/* NOTE: action will be the route, method will be the HTTP verb */}
            <form action="/pokemon" method="POST">
              Name: <input type="text" name="name" /><br/>
              <input type="submit" name="" value="Add Pokemon"/>
            </form>
            <a href="/pokemon">Back</a>
        </div>
      </html>
      )
    }
  }

module.exports = New