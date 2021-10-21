import { combineReducers, createStore } from "redux";
import friendsReducer from "./reducers/friends-reducer";
import homepageReducer from "./reducers/homepage-reducer";

let reducers = combineReducers({
   homepage: homepageReducer,
   friends: friendsReducer,
});

let store = createStore(reducers);

export default store;
