import { DESTROY_SESSION, INSERT_USER_TO_STORE, SET_LOGIN_FORM_ERR_MESSAGE } from '../actions/user';

export const initialState = {
  currentUser: {
    isLogged: false,
    name: '',
    mail: '',
  },
  loginForm: {
    errMessage: '',
  },
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case INSERT_USER_TO_STORE: {
      return {
        ...state,
        currentUser: {
          ...state.currentUser,
          isLogged: true,
          name: action.name,
          mail: action.mail,
        },
      };
    }
    case DESTROY_SESSION: {
      localStorage.clear();
      return {
        ...state,
        currentUser: {
          ...state.currentUser,
          isLogged: false,
          name: '',
          mail: '',
        },
      };
    }
    case SET_LOGIN_FORM_ERR_MESSAGE: {
      return {
        ...state,
        loginForm: {
          ...state.loginForm,
          errMessage: action.errMessage,
        },
      };
    }
    default:
      return state;
  }
};

export default reducer;
