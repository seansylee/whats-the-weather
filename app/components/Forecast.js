var React = require('react');
var api = require('../utils/api');
var queryString = require('query-string');
var ForecastDetail = require('./ForecastDetail');
var Loading = require('./Loading');
var Error = require('./Error');

class Forecast extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			forecastData: [],
			loading: true,
			badParam: false,
			city: ''
		}
		this.makeRequest = this.makeRequest.bind(this);
	}

	componentDidMount(){
		var city = queryString.parse(this.props.location.search).city;
		this.makeRequest(city);
	}

	componentWillReceiveProps(nextProps){
		var city = queryString.parse(nextProps.location.search).city;
		this.makeRequest(city);
	}

	makeRequest(city){
		this.setState(function() {
			return {
				loading: true
			}
		})

		api.getCurrentWeather(city)
			.then(function (res){
				console.log(res);
				this.setState(function () {
					return {
						loading: false,
						forecastData: res,
						badParam: false,
						city: city
					}
				})
			}.bind(this))
			.catch(function(err) {
				this.setState(function(){
					return {
						loading: false,
						forecastData: null,
						badParam: true,
						city: city 
					}
				})
			}.bind(this));
	}

	render() {
		if(this.state.loading){
			return(
			<div className='forecast-container'>
				<Loading />
			</div>)
		} else if(this.state.badParam){
			return <Error wrongParam={this.state.city} />
		} else {
			return <ForecastDetail current={this.state.forecastData}/>
		}
	}
}

module.exports = Forecast;
