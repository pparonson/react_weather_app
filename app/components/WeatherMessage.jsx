const React = require('react');

// const WeatherMessage = React.createClass({
//   render() {
//     const {location, temp} = this.props;
//
//     return (
//       <div>
//         <p>Location: {location}, Temperature: {temp}</p>
//       </div>
//     );
//   }
// });


const WeatherMessage = ({location, temp}) => {
  // const {location, temp} = props;

  return (
    <div>
      <p>Location: {location}, Temperature: {temp}</p>
    </div>
  );
};
module.exports = WeatherMessage;
