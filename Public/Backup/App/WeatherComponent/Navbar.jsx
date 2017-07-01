var React = require('react');
var {Link,IndexLink} = require('react-router');

var Navbar = React.createClass({
    render: function () {

        return (
           <div>
               <h2>Nav Componenet</h2>
               <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight:'bold'}}>Weather</IndexLink>                              
               <Link to="/about" activeClassName="active" activeStyle={{fontWeight:'bold'}}>About us</Link>
               <Link to="/services" activeClassName="active" activeStyle={{fontWeight:'bold'}}>Services</Link>
               <Link to="/locateus" activeClassName="active" activeStyle={{fontWeight:'bold'}}>Locateus</Link>
           </div>
        )
    }

})
module.exports = Navbar;