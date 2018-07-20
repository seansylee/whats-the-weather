var React = require('react');
var api = require('../utils/api');
var queryString = require('query-string');
var ForecastDetail = require('./ForecastDetail');
var Loading = require('./Loading');

class Forecast extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			forecastData: [],
			loading: true 
		}
		this.makeRequest = this.makeRequest.bind(this);
	}

	componentDidMount(){
		console.log("ive mounted");
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
		console.log("from API call", res);
				this.setState(function () {
					return {
						loading: false,
						forecastData: res
					}
				})
			}.bind(this))
	}

	render() {
		console.log("loading?", this.state.loading)
		console.log("from render", this.state.forecastData);
		return (
			this.state.loading === true
			?<div className='forecast-container'>
				<Loading />
			</div>			
			:<ForecastDetail current={this.state.forecastData}/>
			)
	}
}

module.exports = Forecast;
