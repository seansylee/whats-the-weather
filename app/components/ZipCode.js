var React = require('react');
var PropTypes = require('prop-types');
var api = require('../utils/api');

class ZipCode extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      zipcode: 98115
    };
		this.handleSubmitZipcode = this.handleSubmitZipcode.bind(this);
		this.handleUpdateZipcode = this.handleUpdateZipcode.bind(this);
  }

  
	handleSubmitZipcode () {
		api.getCurrentWeather(this.state.zipcode)
			.then(function (res) {
				console.log(res);
			})
	}

	handleUpdateZipcode (e) {
		var zip = e.target.value;
		this.setState(function () {
			return {
				zipcode: zip 
			}
		});
	}
  render() {
    return (
      <div
        className='zipcode-container'
				style={{flexDirection: this.props.direction}}>
        <input
          className= 'ghost-input'
          placeholder='Seattle, WA'
          onChange={this.handleUpdateZipcode}
					type='text'
					style={{color: this.props.textColor}}
          /*value={this.state.zipcode}*/ />
        <button
          className= 'ghost-button'
          type='button'
          // Set margin and color of the input text as props.
          // style={{margin: 10}}
					onClick={
							this.handleSubmitZipcode
					}>
          Get Weather
        </button>
      </div>
    )
  }
}

ZipCode.defaultProps = {
  direction: 'column'
}

ZipCode.propTypes = {
	direction: PropTypes.string,
	textColor: PropTypes.string,
}

module.exports = ZipCode;
