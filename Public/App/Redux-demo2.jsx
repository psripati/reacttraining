var redux = require('redux');

console.log('redux starting');

var reducer = (state = { name: "Anonymous" }, action) => {

    switch (action.type) {
        case 'CHANGE_NAME':
            return {
                ...state,
                name: action.name
            };

        default:
            return state;
    }

};

var store = redux.createStore(reducer);

var us=store.subscribe(()=>{
var state=store.getState();
console.log('name is ', state.name);
})


var currentState = store.getState();
console.log('currentState', currentState);

store.dispatch({
    type: 'CHANGE_NAME',
    name: 'Prash'
});

// console.log('Updated State', store.getState());

store.dispatch({
    type: 'CHANGE_NAME',
    name: 'Prashas'
});
us();
store.dispatch({
    type: 'CHANGE_NAME',
    name: 'Pr'
});

// console.log('Updated State', store.getState());
