import { combineReducers } from "redux";
import SignInReducer from "./signIn";
const allreducers = combineReducers({
  SignIn: SignInReducer,
});

export default allreducers;
