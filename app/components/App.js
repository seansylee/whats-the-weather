var React = require('react');
var ZipCode = require('./ZipCode');
var Forecast = require('./Forecast');
var NotFound = require('./NotFound')
var ReactRouter = require('react-router-dom');
var Switch = ReactRouter.Switch;
var BrowserRouter = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;

        
class App extends React.Component {

  render(){
    return (
      <BrowserRouter>
        <div className='container'>
          <Switch>
            <Route exact path='/' render={function(props){
              return (
                <div className = 'home-container'>
                  <h1 className = 'main-header'>forecast?</h1>
                  <h2 className = 'main-subheader'> ... enter a city below to find out its current weather</h2>
                  <ZipCode 
                    direction = 'column'
                    textColor = 'white'
                    onSubmitZipcode = {function (city) {
                        props.history.push({
                          pathname: 'forecast',
                          search: '?city=' + city
                        });
                    }}
                  />
                </div>)
            }} />
            <Route path= '/forecast' component={Forecast} />
            <Route render={function(){
              return <NotFound />
            }} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}
module.exports = App;
