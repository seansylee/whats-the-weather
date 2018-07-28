var React = require('react');
var PropTypes = require('prop-types');
var Link = require('react-router-dom').Link

class Error extends React.Component{
  constructor(props){
   super(props)
   this.state = {
      city: props.wrongParam
   }
  }

  render(){
    return (
    <div className='forecast-container'>
      <h1> I don't think "<b> {this.state.city} " </b> is a city</h1>
      <p>Is it an empty field?</p>
      <p>Maybe missing a space?</p>
      <p>Either way.. please try again</p>
      <Link to='/'>
         <button>back to home</button>
       </Link>
    </div>
    )
  }
}

Error.PropTypes ={
  city: PropTypes.string.isRequired
}

module.exports = Error;