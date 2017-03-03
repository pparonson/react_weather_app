const React = require('react');

const WeatherMessage = ({location, temp}) => {
  // const {location, temp} = props;

  return (
    <div>
      <p className="text-center">Location: {location}, Temperature: {temp}</p>
    </div>
  );
};
module.exports = WeatherMessage;
