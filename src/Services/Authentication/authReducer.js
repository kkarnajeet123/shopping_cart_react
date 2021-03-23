import { LOGIN_REQUEST, SUCCESS, FAILURE } from "./authType";

const initialState = {
  isLoggedIn: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
      };
    case FAILURE:
      return {
        isLoggedIn: action.payload,
      };
    default:
      return state;
  }
};
