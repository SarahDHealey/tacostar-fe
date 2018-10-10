import { createStore } from 'redux';

//create a store
//set initial state
const store = createStore((state = {count: 0}) => {
	return state;
})

console.log(store.getState())

const store = createStore((state = {count: 0}) => {
	return state;
})

console.log(store.getState())