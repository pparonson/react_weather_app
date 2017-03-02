const React = require('react');

const Nav = require('Nav');

// const Main = React.createClass({
//   render() {
//     return (
//       <div>
//         <Nav></Nav>
//         <h2>Main Component</h2>
//         {this.props.children}
//       </div>
//     );
//   }
// });

const Main = (props) => {
  return (
    <div>
      <Nav></Nav>
      <h2>Main</h2>
      {props.children}
    </div>
  );
};

module.exports = Main;
