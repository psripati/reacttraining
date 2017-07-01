var React = require('react');
var Navbar = require('Navbar');



var Main = React.createClass({
    render: function () {

        return (
            <div>
                <Navbar />
                <h2>Main component</h2>
                {this.props.children}
            </div>

        )
    }

})
module.exports = Main;