const React = require('react');
const openWeatherMap = require('openWeatherMap');

const WeatherForm = require('WeatherForm');
const WeatherMessage = require('WeatherMessage');
const ErrorModal = require('ErrorModal');


const Weather = React.createClass({
  getInitialState() {
    return {
      // location: 'Denver',
      // temp: 72

      // set default isLoading to false
      isLoading: false
    }
  },
  handleSearch(location) {
    // this.setState({
    //   location: location,
    //   temp: 23
    // });
    const self = this;

    this.setState({
      isLoading: true,
      // clear data
      errorMessage: undefined,
      location: undefined,
      temp: undefined
    });

    openWeatherMap.getTemp(location).then(function(temp) {
      self.setState({
        isLoading: false,
        location: location,
        temp: temp
      });
    }, function(e) {
      self.setState({
        isLoading: false,
        errorMessage: e.message
      });
      alert(errorMessage);
    });
  },

  componentDidMount() {
    // get query string from location obj
    const location = this.props.location.query.location;
    if (location && location.length > 0) {
      this.handleSearch(location);
      // reset url query string to root of app
      window.location.hash='#/'
    }
  },
  // react router listens for prop change and updates child ie. Weather.jsx
  componentWillReceiveProps(newProps) {
    const location = newProps.location.query.location;
    if (location && location.length > 0) {
      this.handleSearch(location);
      // reset url query string to root of app
      window.location.hash='#/'
    }
  },
  render() {
    const {isLoading, location, temp, errorMessage} = this.state;

    // render components depending on specific state
    const renderMessage = () => {
      if (isLoading) {
        return <h4 className="text-center">Fetching weather..</h4>
      } else if (location && temp) {
        return <WeatherMessage location={location} temp={temp}/>;
      }
    };

    const renderError = () => {
      if (typeof errorMessage === 'string') {
        return (
          // return instance of ErrorModal component
          <ErrorModal message={errorMessage}/>
        );
      }
    };

    return (
      <div>
        <h1 className="text-center page-title title-color">Get Weather</h1>
        {/* pass onSearch / handleSearch fn to WeatherForm */}
        <WeatherForm onSearch={this.handleSearch}/>
        {/* <WeatherMessage location={location} temp={temp}/> */}
        {renderMessage()}
        {renderError()}
      </div>
    );
  }
});

module.exports = Weather;
