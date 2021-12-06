import actionTypes  from "../redux/actionTypes";

export const checkLogin = data => ({
    type: actionTypes.AUTH_DATA,
    payload: data
  });
  
  export const checkAuthentication = (data) =>({
    type: actionTypes.CHECK_AUTHENTICATION,
    payload: data
  })

  export const createNote = data => ({
    type: actionTypes.CREATE_NOTE,
    payload: data
  })

  export const getAllLists = data => ({
    type: actionTypes.GET_ALL_LIST_OF_EMAIL,
    payload: data
  })

  export const LogOut = data => ({
    type: actionTypes.LOGOUT,
    payload: data
  });