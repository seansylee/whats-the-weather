var React = require('react');

class App extends React.Component {
  render(){
    return (
      <div className = 'container'>
        <div>
          <h1>The Main Header</h1> 
        </div>
        <div className = 'home-container'>
          <h2 className = 'header'>Enter a City !</h2> 
        </div>
      </div>
    )
  }
}

module.exports = App;