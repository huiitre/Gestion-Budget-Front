//* ACTION TYPE LOGIN
export const LOGIN = 'LOGIN';
//* ACTION CREATOR login
export const login = (mail, password) => ({
  type: LOGIN,
  mail,
  password,
});

//* ACTION TYPE INSERT_USER_TO_STORE
export const INSERT_USER_TO_STORE = 'INSERT_USER_TO_STORE';
//* ACTION CREATOR insertUserToStore
export const insertUserToStore = ({ name, email }) => ({
  type: INSERT_USER_TO_STORE,
  name: name,
  mail: email,
});

//* ACTION TYPE LOAD_USER
export const LOAD_USER = 'LOAD_USER';
//* ACTION CREATOR loadUser
export const loadUser = () => ({
  type: LOAD_USER,
});

//* ACTION TYPE DESTROY_SESSION
export const DESTROY_SESSION = 'DESTROY_SESSION';
//* ACTION CREATOR destroySession
export const destroySession = () => ({
  type: DESTROY_SESSION,
});

//* ACTION TYPE SET_LOGIN_FORM_ERR_MESSAGE
export const SET_LOGIN_FORM_ERR_MESSAGE = 'SET_LOGIN_FORM_ERR_MESSAGE';
//* ACTION CREATOR setLoginFormErrMessage
export const setLoginFormErrMessage = (errMessage) => ({
  type: SET_LOGIN_FORM_ERR_MESSAGE,
  errMessage,
});
