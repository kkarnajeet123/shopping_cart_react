import { LOGIN_REQUEST, SUCCESS, FAILURE } from "./authType";

export const autheneticateUser = (email, password) => {
  return (dispatch) => {
    dispatch(loginRequest());
    if (email == "test" && password == "test") {
      dispatch(success());
    } else {
      dispatch(failure());
    }
  };
};

const loginRequest = () => {
  return {
    type: LOGIN_REQUEST,
  };
};

const success = () => {
  return {
    type: SUCCESS,
    payload: true,
  };
};

const failure = () => {
  return {
    type: FAILURE,
    payload: false,
  };
};
