import { combineReducers, createStore } from "redux";
import homepageReducer from "./reducers/homepage-reducer";

let reducers = combineReducers({
   homepage: homepageReducer,
});

let store = createStore(reducers);

export default store;
