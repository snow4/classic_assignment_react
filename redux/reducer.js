import ActionTypes from "./actionTypes";
import initialState from "./initialState";

export default (state = initialState.modal, action) => {
  console.log("action in reducer", action,"initial state",state);
  switch (action.type) {
    case ActionTypes.AUTH_DATA:
      return {
        ...state,
        authData: action.payload,
        isLoggedIn:true
      };
    case ActionTypes.LOGOUT:
      return {
         ...state,
         isLoggedIn: action.payload,
      };
    case ActionTypes.CHECK_AUTHENTICATION:
      return {
          ...state,
          isLoggedIn: action.payload,
      };
    case ActionTypes.CREATE_NOTE:
      return {
          ...state,
        lists: action.payload,
      };
    case ActionTypes.GET_ALL_LIST_OF_EMAIL:
      return {
          ...state,
        lists: action.payload.result,
      };
    default:
      return state;
  }
};
