var React = require('react');
var PropTypes = require('prop-types');

class ZipCode extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      zipcode: 98115
    };
  }
  
  handleSubmitZipcode () {}
  handleUpdateZipcode () {}

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
          /*value={this.state.zipcode}*/ />
        <button
          className= 'ghost-button'
          type='button'
          style={{margin: 10}}
          onClick={this.handleSubmitZipcodee}>
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
}

module.exports = ZipCode;