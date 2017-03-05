const React = require('react');
const {Link, IndexLink} = require('react-router');

const Nav = React.createClass({
  onSearch(e) {
    e.preventDefault;
    // get ref value from input field
    const location = this.refs.search.value;
    // encode for url
    const encodedLocation = encodeURIComponent(location);

    if (location.length > 0) {
      // clear input field
      this.refs.search.value = '';
      // create location query string
      window.location.hash = `#/?location=${encodedLocation}`;
    }
  },
  render() {
    return (
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">
              React Weather App
            </li>
            <li>
              <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>
                Get Weather
              </IndexLink>
            </li>
            <li>
              <Link to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>
                About
              </Link>
            </li>
            <li>
              <Link to="/examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>
                Examples
              </Link>
            </li>
          </ul>
        </div>
        <div className="top-bar-right">
          <form onSubmit={this.onSearch}>
            <ul className="menu">
              <li>
                <input type="search" placeholder="Search weather by city" ref="search"></input>
              </li>
              <li>
                <input type="Submit" className="button" value="Get Weather"></input>
              </li>
            </ul>
          </form>
        </div>
      </div>
    );
  }
});

module.exports = Nav;
