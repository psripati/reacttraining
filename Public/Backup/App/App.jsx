// import React from 'react'
// import ReactDOM from 'react-dom'
var React = require('react');
var ReactDOM = require('react-dom');
 var Weather=require('Weather');
var { Route, Router, IndexRoute, hashHistory } = require('react-router');
var Main = require('Main');
var AboutUs = require('AboutUs');
var Services = require('Services');
var Locateus = require('LocateUs');


ReactDOM.render(  
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <Route path="about" component={AboutUs} />
      <Route path="services" component={Services} />
      <Route path="locateus" component={Locateus} />
      <IndexRoute component={Weather} />
    </Route>
  </Router>,
  document.getElementById('app')
);




// ReactDOM.render(
//   <Weather name={CityName}/>,
//   document.getElementById('app')
// );
