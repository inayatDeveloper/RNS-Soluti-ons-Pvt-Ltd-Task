import { ReqLogin, SuccessLogin, FailedLogin } from "../constant";
var signInReducer = (
  state = {
    fetching: false,
    fetched: false,
    error: false,
    User: [],
  },
  action
) => {
  switch (action.type) {
    case ReqLogin:
      return { ...state, fetching: true };
      break;
    case SuccessLogin:
      return {
        ...state,
        fetching: false,
        fetched: true,
        User: action.data,
      };
    case FailedLogin:
      return { ...state, fetching: false, fetched: false, error: action.error };
      break;
  }
  return state;
};

export default signInReducer;
