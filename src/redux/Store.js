import {createStore} from 'redux'
import {rootReducers} from "./combine";
export const Store = createStore(rootReducers);
