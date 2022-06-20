/* eslint-disable no-lone-blocks */
import axios from 'axios';

//* import des actions
import {
  destroySession,
  insertUserToStore, LOAD_USER, LOGIN, setLoginFormErrMessage,
} from '../actions/user';

//* déclaration de l'url dev ou prod
let finalURL = '';
if (process.env.NODE_ENV === 'development') {
  finalURL = 'http://localhost:8080/api';
}
else {
  finalURL = '';
}
console.log('Environnement : ', process.env.NODE_ENV);

//* création de l'instance d'axios
const axiosInstance = axios.create({
  withCredentials: true,
  baseURL: finalURL,
});

//* récupération du jwt en LS
const token = localStorage.getItem('TOKEN');

const userMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case LOGIN: {
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
        });
    }
      next(action);
      break;

    case LOAD_USER: {
      axiosInstance.defaults.headers.common.Authorization = `Bearer ${token}`;
      axiosInstance
        .get('/user/profile')
        .then((res) => {
          console.log(res.data);
          store.dispatch(insertUserToStore(res.data));
        })
        .catch(() => {
          localStorage.clear();
          //* on vient mettre isLogged à false
          store.dispatch(destroySession());
        });
    }
      next(action);
      break;

    default:
      next(action);
  }
};

export default userMiddleware;
