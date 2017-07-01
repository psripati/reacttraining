var redux = require('redux');

console.log('redux starting');

var nextHobbyId = 1;
var nextDeptId = 1;



var nameReducer = (state = 'Anonymous', action) => {
    switch (action.type) {
        case 'CHANGE_NAME':
            return action.name;
        default:
            return state;
    };
}

var hobbiesReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_HOBBY':
            return [
                ...state,
                {
                    id: nextHobbyId++,
                    hobby: action.hobby
                }
            ];
        case 'REMOVE_HOBBY':
            return state.filter((hobby) => hobby.id !== action.id);
        default:
            return state;
    }

}

var departmentsReducer = (state = [], action) => {

    switch (action.type) {
        case 'ADD_DEPT':
            return [
                ...state,
                {
                    id: nextDeptId++,
                    department: action.dept
                }
            ];
        default:
            return state;
    };

}

var reducer = redux.combineReducers({
    name: nameReducer,
    hobbies: hobbiesReducer,
    departments: departmentsReducer

});



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

store.dispatch({
    type: 'REMOVE_HOBBY',
    id: 1
});



