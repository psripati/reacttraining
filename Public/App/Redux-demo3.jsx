var redux = require('redux');

console.log('redux starting');

var stateDefault = {
    name: 'Prash',
    hobbies: [],
    departments: []
}

var nextHobbyId = 1;
var nextDeptId = 1;

var reducer = (state = stateDefault, action) => {

    switch (action.type) {
        case 'CHANGE_NAME':
            return {
                ...state,
                name: action.name
            };
        case 'ADD_HOBBY':
            return {
                ...state,
                hobbies: [...state.hobbies, {
                    id: nextHobbyId++,
                    hobby: action.hobby
                }]
            };
        case 'ADD_DEPT':
            return {
                ...state,
                departments: [...state.departments, {
                    id: nextDeptId++,
                    dept: action.dept
                }]
            };
        case 'DELETE':
            return {
                ...state,
                departments: [...state.departments, {
                    id: nextDeptId++,
                    dept: action.dept
                }]
            };

        default:
            return state;
    }

};

var store = redux.createStore(reducer, redux.compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
));

var us = store.subscribe(() => {
    var state = store.getState();
    console.log('state is ', state);
})


var currentState = store.getState();
console.log('currentState', currentState);

store.dispatch({
    type: 'CHANGE_NAME',
    name: 'Prash'
});

store.dispatch({
    type: 'ADD_HOBBY',
    hobby: 'Watching'
});

store.dispatch({
    type: 'ADD_DEPT',
    dept: 'EMP'
});



