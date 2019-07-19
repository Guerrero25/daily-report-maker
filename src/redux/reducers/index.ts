import { combineReducers } from "redux";
import user from "./user";
import dailies from "./dailies";

const rootReducer = combineReducers({ user, dailies });

export default rootReducer;
