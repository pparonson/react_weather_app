const React = require('react');

// const About = React.createClass({
//   render() {
//     return (
//       <h3>About Component</h3>
//     );
//   }
// });

// As long a react fn class is stateless; refactor to:
const About = (props) => {
  return (
    <div>
      <h3>About</h3>
      <p>Welcome to the About page.</p>
    </div>
  );
};

module.exports = About;
