var redux = require('redux');
var axios = require('axios');

console.log('redux starting');

//Reducer

var mapReducer = (state = { isFetching: false, url: undefined }, action) => {
    switch (action.type) {
        case 'START_LOCATION_FETCH':
            return {
                isFetching: true,
                url: undefined
            };
        case 'COMPLETE_LOCATION_FETCH':
            return {
                isFetching: false,
                url: action.url
            };
        default:
            return state;
    };
}


var fetchLocation = () => {
    store.dispatch(startLocationFetch());
    axios.get('http://ipinfo.io').then(function (res) {
        var loc = res.data.loc;
        var baseUrl = "http://maps.google.co.in?q="
        store.dispatch(completeLocationFetch(baseUrl + loc));
    })
}


var reducer = redux.combineReducers({
    map: mapReducer
});


//Store
var store = redux.createStore(reducer, redux.compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
));

var us = store.subscribe(() => {
    var state = store.getState();
    console.log('state is ', state);

    if (state.map.isFetching) {
        document.getElementById('app').innerHTML = "Loading...";
    }
    else if (state.map.url) {
        document.getElementById('app').innerHTML = '<a href="' + state.map.url + '"target="_blank">View Your Location</a>';
    }
})


var currentState = store.getState();
console.log('currentState', currentState);


//Action Creator
var startLocationFetch = () => {
    return {
        type: 'START_LOCATION_FETCH'
    }
};

var completeLocationFetch = (url) => {
    return {
        type: 'COMPLETE_LOCATION_FETCH',
        url
    }
};




fetchLocation();

