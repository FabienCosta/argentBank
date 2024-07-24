export const USER_PROFILE_SUCCESS = "USER_PROFILE_SUCCESS";
export const USER_PROFILE_FAIL = "USER_PROFILE_FAIL";

const initialState = {
  succes: false,
  firstName: "",
  lastName: "",
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_PROFILE_SUCCESS:
      return {
        succes: true,
        firstName: action.payload.body.firstName,
        lastName: action.payload.body.lastName,
        userName: action.payload.body.userName,
      };
    case USER_PROFILE_FAIL:
      return {
        succes: false,
        firstName: "",
        lastName: "",
      };
    default:
      return state;
  }
};
