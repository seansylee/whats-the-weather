var React = require('react');
var Link = require('react-router-dom').Link

class NotFound extends React.Component{
  render(){
    return(
      <div className ='foreacst-container'>
        <h1>404.</h1>
        <div>Not Found</div>
        <div>This page doesnt exist lol</div>
        <Link to='/'>
          <button> back to home</button>
        </Link>
      </div>
    )
  }
}

module.exports = NotFound;