const React = require('react');
const ReactDOM = require('react-dom');

const Main = require('Main');
const Weather = require('Weather');
const About = require('About');
const Examples = require('Examples');

// react router library used to configure url routes for web app
const {Route, Router, IndexRoute, hashHistory} = require('react-router');
$(document).foundation();
// loaders
require('style!css!foundation-sites/dist/css/foundation.min.css');
require('style!css!applicationStyles')
ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <Route path="about" component={About}></Route>
      <Route path="examples" component={Examples}></Route>
      <IndexRoute component={Weather}></IndexRoute>
    </Route>
  </Router>,
  document.getElementById('app')
);
