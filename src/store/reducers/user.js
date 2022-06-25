import {
  CHANGE_IS_LOADING_LOGIN_FORM, DESTROY_SESSION, INSERT_USER_TO_STORE, SET_LOGIN_FORM_ERR_MESSAGE,
} from '../actions/user';

export const initialState = {
  currentUser: {
    isLogged: false,
    name: '',
    mail: '',
  },
  loginForm: {
    errMessage: '',
    isLoading: false,
  },
  currentLocation: '',
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
    case CHANGE_IS_LOADING_LOGIN_FORM: {
      return {
        ...state,
        loginForm: {
          ...state.loginForm,
          isLoading: action.bool,
        },
      };
    }
    default:
      return state;
  }
};

export default reducer;
