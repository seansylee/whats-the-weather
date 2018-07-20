var React = require('react');
var api = require('../utils/api');
var queryString = require('query-string');
var utils = require('../utils/helpers');
var getDate = utils.getDate;
var convertTemp = require('../utils/helpers').convertTemp;
var Link = require('react-router-dom').Link;

class ForecastDetail extends React.Component{
  
  constructor(props){
    super(props);
    this.state ={
      name: this.props.current.name,
      icon: this.props.current.weather[0].icon,
      dt: getDate(this.props.current.dt),
      description: this.props.current.weather[0].description,
      temp: convertTemp(this.props.current.main.temp),
      temp_min: convertTemp(this.props.current.main.temp_min),
      temp_max: convertTemp(this.props.current.main.temp_max)
    }
  }
   render() {
    return(
      <div className='forecast-container'>
        <h2 className='city'>{this.state.name}.</h2>
        <img className='weather' src={'./app/images/weather-icons/' + this.state.icon + '.svg'} alt='Weather' />
        <h2 className='subheader'>{this.state.dt}</h2>
        <div className='forecast-details'><b>" {this.state.description} "</b></div>
        <div className='forecast-details'><b>current temp:</b> {this.state.temp} degrees</div>
        <div className='forecast-details'><b>min temp:</b> {this.state.temp_min} degrees</div>
        <div className='forecast-details'><b>max temp:</b> {this.state.temp_max} degrees</div>
        <Link to='/'>
          <button> back to home</button>
        </Link>
      </div>
    )

  }
}

module.exports = ForecastDetail;