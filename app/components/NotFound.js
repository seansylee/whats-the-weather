var React = require('react');

class NotFound extends React.Component{
  render(){
    return(
      <div>
        <h1>404.</h1>
        <div>Not Found</div>
        <div>This page doesnt exist lol</div>
      </div>
    )
  }
}

module.exports = NotFound;