import axios from "axios";
import {
  USER_LOGIN_FAILURE,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_REGISTER_SUCCESS,
} from "./actionTypes";

const loginRequestAction = () => {
  return { type: USER_LOGIN_REQUEST };
};
const loginSuccessAction = (payload) => {
  return { type: USER_LOGIN_SUCCESS, payload };
};
const loginFailureAction = () => {
  return { type: USER_LOGIN_FAILURE };
};
const registerSuccessAction = () => {
  return { type: USER_REGISTER_SUCCESS };
};

export const login = (userData) => (dispatch) => {
  dispatch(loginRequestAction());

  return axios({
    method: "post",
    // url: "https://reqres.in/api/login",
    url: "http://localhost:9000/users/login",
    data: userData,
  })
    .then((res) => {
      if (res.data?.token) dispatch(loginSuccessAction(res.data.token));
      else dispatch(loginFailureAction());
      console.log(res.data);
    })
    .catch((err) => dispatch(loginFailureAction()));
};

export const register = (userData) => (dispatch) => {
  dispatch(loginRequestAction());
  return axios({
    method: "post",
    url: "http://localhost:9000/users/register",
    data: userData,
  })
    .then((res) => {
      // console.log(res)
      dispatch(registerSuccessAction());
    })
    .catch((err) => dispatch(loginFailureAction()));
};
