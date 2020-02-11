// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();

import { createStore } from 'redux';

// creates global types for actions 

const ADD_TODO = 'ADD_TODO';
const REM_TODO = 'REM_TODO';
const TODO_COMPLETED = 'TODO_COMPLETED';

// creates initial states

const todoState = [{
    todo: "put away laundry",
    completed: false,
}]

// Action components

function addTodo(text) {
    return {
        type: ADD_TODO,
        payload: {
            todo: text,
            completed: false
        }
    }
}

function remTodo(whichOne) {
    return {
        type: REM_TODO,
        id: whichOne
    }
}

function completeTodo(whichOne) {
    return {
        type: TODO_COMPLETED,
        id: whichOne
    }
}

// creates reducers

function manageTodos(state=todoState, action) {
    const newState = [...state];

    switch (action.type) {
        case ADD_TODO:
            newState.push(action.payload);
            break;
        case REM_TODO:
            newState.splice(action.id, 1);
            break;
        case TODO_COMPLETED:
            newState[action.id].completed = true;
            break;
        default:
            console.log(`No match found`);
            break;
    }

    return newState;
}

// combines reducers (not needed here)

// initializes store

// adds store debugging

// basic dispatches

