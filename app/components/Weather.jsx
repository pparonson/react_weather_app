const React = require('react');

const WeatherForm = require('WeatherForm');
const WeatherMessage = require('WeatherMessage');
const openWeatherMap = require('openWeatherMap');

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
      isLoading: true
    });

    openWeatherMap.getTemp(location).then(function(temp) {
      self.setState({
        isLoading: false,
        location: location,
        temp: temp
      });
    }, function(errorMessage) {
      self.setState({
        isLoading: false
      });
      alert(errorMessage);
    });
  },
  render() {
    const {isLoading, location, temp} = this.state;

    // render components depending on specific state
    const renderMessage = () => {
      if (isLoading) {
        return <h4>Fetching weather..</h4>
      } else if (location && temp) {
        return <WeatherMessage location={location} temp={temp}/>;
      }
    };
    return (
      <div>
        <h3>Get Weather</h3>
        {/* pass onSearch / handleSearch fn to WeatherForm */}
        <WeatherForm onSearch={this.handleSearch}/>
        {/* <WeatherMessage location={location} temp={temp}/> */}
        {renderMessage()}
      </div>
    );
  }
});

module.exports = Weather;
