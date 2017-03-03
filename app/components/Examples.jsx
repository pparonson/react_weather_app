const React = require('react');
const {Link} = require('react-router')
// const Examples = React.createClass({
//   render() {
//     return (
//       <h3>Examples Component</h3>
//     );
//   }
// });

const Examples = (props) => {
  return (
    <div>
      <h1 className="text-center">Examples</h1>
      <p>Here are a few example locations to try out</p>
      <ol>
        <li>
          <Link to="/?location=Denver">Denver, CO</Link>
        </li>
        <li>
          <Link to="/?location=Rio">Rio, Brazil</Link>
        </li>
      </ol>
    </div>
  );
};

module.exports = Examples;
