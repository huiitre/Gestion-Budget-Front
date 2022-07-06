/* eslint-disable no-lone-blocks */
import axios from 'axios';

//* import des actions
import {
  changeIsLoadingLoginForm,
  destroySession,
  insertUserToStore, LOAD_USER, LOGIN, setLoginFormErrMessage,
} from '../actions/user';

//* création de l'instance d'axios
const axiosInstance = axios.create({
  baseURL: `${process.env.REACT_APP_API_URL}`,
});

//* récupération du jwt en LS
const token = localStorage.getItem('TOKEN');

const userMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case LOGIN: {
      store.dispatch(changeIsLoadingLoginForm(true));

      //* récupération du mail et mdp de l'utilisateur
      const { mail, password } = action;

      //* on lance la requête
      axiosInstance
        .post('/login_check', {
          username: mail,
          password,
        })
        .then((res) => {
          axiosInstance.defaults.headers.common.authorization = `Bearer ${res.data.token}`;
          localStorage.setItem('TOKEN', res.data.token);
          store.dispatch(insertUserToStore(res.data.data));
        })
        .catch((e) => {
          store.dispatch(setLoginFormErrMessage(e.response.data.message));
        })
        .finally(() => {
          store.dispatch(changeIsLoadingLoginForm(false));
        });
    }
      next(action);
      break;

    case LOAD_USER: {
      store.dispatch(changeIsLoadingLoginForm(true));
      axiosInstance.defaults.headers.common.Authorization = `Bearer ${token}`;
      axiosInstance
        .get('/user/profile')
        .then((res) => {
          store.dispatch(insertUserToStore(res.data));
        })
        .catch(() => {
          localStorage.clear();
          //* on vient mettre isLogged à false
          store.dispatch(destroySession());
        })
        .finally(() => {
          store.dispatch(changeIsLoadingLoginForm(false));
        });
    }
      next(action);
      break;

    default:
      next(action);
  }
};

export default userMiddleware;
