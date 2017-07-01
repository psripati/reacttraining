var redux = require('redux');

console.log('redux starting');

var nextHobbyId = 1;
var nextDeptId = 1;

//Reducer

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


//Store
var store = redux.createStore(reducer, redux.compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
));

var us = store.subscribe(() => {
    var state = store.getState();
    console.log('state is ', state);
})


var currentState = store.getState();
console.log('currentState', currentState);


//Action Creator
var addHobby = (hobby) => {
    return {
        type: 'ADD_HOBBY',
        hobby
    }
};

var deleteHobby = (id) => {
    return {
        type: 'REMOVE_HOBBY',
        id
    }
};

var changeName = (name) => {
    return {
        type: 'CHANGE_NAME',
        name
    }
};

var addDept = (dept) => {
    return {
        type: 'ADD_DEPT',
        dept
    }
};







//Actions
store.dispatch(changeName('Pra'));

store.dispatch(addHobby('Watch'));

store.dispatch(addDept('EP'));

store.dispatch(deleteHobby(1));



