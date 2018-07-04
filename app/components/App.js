var React = require('react');
var ZipCode = require('./ZipCode');

class App extends React.Component {
  render(){
    return (
      <div className = 'container'>

        <div className= 'header-container'>
          <h1>The Main Header lol</h1>
          <ZipCode 
						direction = 'row'
						textColor = 'black'
					/>
        </div>
        
        <div className = 'home-container'>
          <h2 className = 'header'>Enter a City & State</h2>
          <ZipCode 
						direction = 'column'
						textColor = 'white'
					/>
        </div>

      </div>
    )
  }
}

module.exports = App;
