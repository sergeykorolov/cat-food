import {combineReducers, compose, createStore} from "redux";
import foodReducer from "./food-reducer";

const reducers = combineReducers({
    foodPage: foodReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers());

export default store;