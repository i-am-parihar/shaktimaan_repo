import { dataReducer } from "./reducer";
import {combineReducers, createStore} from "redux" ;

export const rootReducer = combineReducers({
    mainData : dataReducer ,
})

export const store = createStore(rootReducer)