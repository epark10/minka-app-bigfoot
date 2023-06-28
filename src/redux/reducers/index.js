import { combineReducers } from "redux";
import { user,signUpFormData } from "./user";

const rootReducer = combineReducers({
  user,
  signUpFormData
});

export default rootReducer;