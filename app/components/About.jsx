const React = require('react');
const {Link} = require('react-router');

// As long a react fn class is stateless; refactor to:
const About = (props) => {
  return (
    <div>
      <h1 className="text-center">About</h1>
      <p>Technology Stack</p>
      <ol>
        <li><a href="https://facebook.github.io/react/">React</a></li>
        <li><a href="https://webpack.js.org/">Webpack</a></li>
        <li><a href="https://www.openweathermap.org/">OpenWeatherMap</a></li>
        <li><a href="https://nodejs.org/en/">Node.js</a></li>
        <li><a href="http://expressjs.com/">Express</a></li>
        <li><a href="https://babeljs.io/">Babel</a></li>
        <li><a href="http://foundation.zurb.com/">Foundation</a></li>
      </ol>
    </div>
  );
};

module.exports = About;
