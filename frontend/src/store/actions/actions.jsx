import {
  // USER_LOGIN_FAIL,
  // USER_LOGIN_SUCCESS,
  USER_LOGOUT,
} from "../reducers/reducers";

import axios from "axios";
import {
  USER_PROFILE_FAIL,
  USER_PROFILE_SUCCESS,
} from "../reducers/userReducer";

export const login = (email, password) => async (dispatch) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.post(
      "http://localhost:3001/api/v1/user/login",
      { email, password },
      config
    );
    dispatch({
      type: USER_PROFILE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: USER_PROFILE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const userProfile = (token) => async (dispatch) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    const { data } = await axios.post(
      "http://localhost:3001/api/v1/user/profile",
      { token },
      config
    )
    .then((response) => {
      dispatch({
        type: USER_PROFILE_SUCCESS,
        payload: response.data,
      });
    })
    .catch((error) => {
      dispatch({
        type: USER_PROFILE_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    });
    
  }

};

export const logout = () => (dispatch) => {
  dispatch({ type: USER_LOGOUT });
};
