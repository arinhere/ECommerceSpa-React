import { createStore, applyMiddleware} from 'redux';
import rootReducer from './rootReducer.redux';
import logger from 'redux-logger';

// middleWares variable will be an array, which will store all the middlewares. 
// Middlewares accepts actions, do something with it and pass them onto root reducer.
// So while creating store, its important to remember to add both root reducer and middlewares

const middleWares = [logger];

// Use spread operator in applymiddleware, as it will take the middlewares array, and pass each item as an 
// argument to that applymiddleware function

const store = createStore(rootReducer, applyMiddleware(...middleWares));

export default store;
