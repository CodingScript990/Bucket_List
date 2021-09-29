// Redux module
import {createStore, combineReducers} from "redux";
import bucket from "./moudules/bucket";
import {createBrowserHistory} from "history";

export const history = createBrowserHistory();

const rootReducer = combineReducers({bucket});

const store = createStore(rootReducer);

export default store;