export const USER_PROFILE_SUCCESS = "USER_LOGIN_SUCCESS";
export const USER_PROFILE_UPDATE = "USER_LOGIN_UPDATE";
export const USER_PROFILE_FAIL = "USER_LOGIN_FAIL";
export const USER_LOGOUT = "USER_LOGOUT";

const initialState = { succes: false, firstName: "", lastName: "" };

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_PROFILE_SUCCESS:
      return {
        succes: true,
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
      };
    case USER_PROFILE_UPDATE:
      return {
        succes: true,
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
      };
    case USER_PROFILE_FAIL:
      return { succes: false, firstName: "", lastName: "" };
    case USER_LOGOUT:
      return { succes: false, firstName: "", lastName: "" };
    default:
      return state;
  }
};
