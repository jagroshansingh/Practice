import { USER_LOGIN_FAILURE, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_REGISTER_SUCCESS } from "./actionTypes";

let initialState = {
  isAuth: false,
  token: "",
  isLoading: false,
  isError: false,
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case USER_LOGIN_REQUEST:
      return { ...state, isLoading: true };
    case USER_LOGIN_SUCCESS:
      return { ...state, isLoading: false, isAuth: true, token: payload };
    case USER_LOGIN_FAILURE:
      return { ...state, isError: true, isLoading: false };
    case USER_REGISTER_SUCCESS:
      return { ...state, isLoading: false };
    default:
      return state;
  }
};
