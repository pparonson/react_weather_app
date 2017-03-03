const React = require('react');

const WeatherForm = React.createClass({
  onFormSubmit(e) {
    e.preventDefault();

    const location = this.refs.location.value;
    if (location.length > 0) {
      // clear the field
      this.refs.location.value = '';
      // call the parent onSearch fn
      this.props.onSearch(location);
    }
  },
  render() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <div>
            <input type="text" ref="location" placeholder="Enter city name"></input>
          </div>
          <div>
            <button className="hollow button expanded" href="#">Get Weather</button>
          </div>
        </form>
      </div>
    );
  }
});

module.exports = WeatherForm;
