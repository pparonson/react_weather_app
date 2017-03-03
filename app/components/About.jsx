const React = require('react');
const {Link} = require('react-router');

// As long a react fn class is stateless; refactor to:
const About = (props) => {
  return (
    <div>
      <h1 className="text-center">About</h1>
      <p>Technology Stack</p>
      <ol>
        <li>
          <a href="https://facebook.github.io/react/">
            React - Javascript library for building the user interface.
          </a>
        </li>
        <li>
          <a href="https://webpack.js.org/">
            Webpack - Build tool used for splitting code base, adding plugins
            and loaders.
          </a>
        </li>
        <li>
          <a href="https://www.openweathermap.org/">
            OpenWeatherMap - API used to provide weather data based on
            submitted location data.
          </a>
        </li>
        <li>
          <a href="https://nodejs.org/en/">
            Node.js - Application runtime environment. NPM is used for package
            management.
          </a>
        </li>
        <li>
          <a href="http://expressjs.com/">
            Express - Node.js web application framework.
          </a>
        </li>
        <li>
          <a href="https://babeljs.io/">
          Babel - Javascript compiler used to support ES6 features and syntax.
          </a>
        </li>
        <li>
          <a href="http://foundation.zurb.com/">
            Foundation - Front-end framework used to style the application.
          </a>
        </li>
      </ol>
    </div>
  );
};

module.exports = About;
