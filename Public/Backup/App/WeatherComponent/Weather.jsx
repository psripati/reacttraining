var React = require('react');
var WeatherData = require('WeatherData');
var WeatherForm = require('WeatherForm');
var WeatherApi = require('WeatherApi');

var Weather = React.createClass({

  getInitialState: function () {
    return {
      name: 'Hyderabad',
      // temp: 30
      isLoading: false
    };
  },
  handleNewData: function (location) {
    var that = this;
    this.setState({ isLoading: true });
    WeatherApi.getTemp(location).then(function (temp) {
      that.setState({
        name: location,
        temp: temp,
        isLoading: false
      });
    }, function (error) {
      that.setState({ isLoading: false });
      alert(error);
    });
  },
  render: function () {
    var { name, temp, isLoading } = this.state;

    function renderMessage() {
      if (isLoading) {
        return <h3>Fetching Weather</h3>
      }
      else if (temp && name) {
        return <WeatherData name={name} temp={temp} />;
      }
    }

    return (
      <div>
        <WeatherForm onNewData={this.handleNewData} />
        {renderMessage()}
      </div>
    );
  }
});

module.exports = Weather;