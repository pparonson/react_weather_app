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
            React
          </a>
          - Javascript library for building the user interface.
        </li>
        <li>
          <a href="https://webpack.js.org/">
            Webpack
          </a>
          - Build tool used for splitting code base, adding plugins
          and loaders.
        </li>
        <li>
          <a href="https://www.openweathermap.org/">
            OpenWeatherMap
          </a>
          - API used to provide weather data based on
          submitted location data.
        </li>
        <li>
          <a href="https://nodejs.org/en/">
            Node.js
          </a>
          - Application runtime environment. NPM is used for package
          management.
        </li>
        <li>
          <a href="http://expressjs.com/">
            Express
          </a>
          - Node.js web application framework.
        </li>
        <li>
          <a href="https://babeljs.io/">
          Babel
          </a>
          - Javascript compiler used to support ES6 features and syntax.
        </li>
        <li>
          <a href="http://foundation.zurb.com/">
            Foundation
          </a>
          - Front-end framework used to style the application.
        </li>
      </ol>
    </div>
  );
};

module.exports = About;
