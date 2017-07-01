var React = require('react');

var WeatherData = React.createClass({
  render: function () {
    var name = this.props.name;
    var temp = this.props.temp;

    return (
      <div>
        <h1>Hello {name}!</h1>
        <p>{temp}</p>
      </div>
    );
  }
});
module.exports = WeatherData;