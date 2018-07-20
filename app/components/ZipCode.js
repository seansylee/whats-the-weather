var React = require('react');
var PropTypes = require('prop-types');
var api = require('../utils/api');

class ZipCode extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      zipcode: '' 
    };
		this.handleSubmitZipcode = this.handleSubmitZipcode.bind(this);
		this.handleUpdateZipcode = this.handleUpdateZipcode.bind(this);
  }

  
	handleSubmitZipcode () {
    this.props.onSubmitZipcode(this.state.zipcode);
    //Empty out the state of this.
    this.setState(function() {
      return{
        zipcode: ''
      } 
    })
	}
  //I NEED TO UNDERSTAND THIS.
  //What is TARGETVALUE.

  // This is what is coming out of the input field.
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
        {/* <input
          className= 'ghost-input'
          placeholder='Seattle, WA'
          onChange={this.handleUpdateZipcode}
					type='text'
          style={{color: this.props.textColor}}
          //Still trying to find the reason for this one.
          value={this.state.zipcode}
          /> */}
        <form onSubmit={this.handleSubmitZipcode}>
          <input type="text" name="name" className="question" id="nme" required autoComplete="off" onChange={this.handleUpdateZipcode} />
          <label htmlFor="nme"></label>
        </form>


        {/* <button
          //Change className to 'ghost-button for other usage'
          //className= 'ghost-button'
          className='button'
          htmlFor='nme'
          type='button'
					onClick={this.handleSubmitZipcode}>
          Get Weather
        </button> */}
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
	onSubmitZipcode: PropTypes.func,
}

module.exports = ZipCode;
          
