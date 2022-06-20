import { createStore, compose, applyMiddleware } from 'redux';

//* import du reducer
import reducer from 'src/store/reducers';

//* import des middleware
import userMiddleware from './middlewares/user';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middlewares = [
  userMiddleware,
];

const enhancers = composeEnhancers(
  applyMiddleware(...middlewares),
);

//* création du store
const store = createStore(reducer, enhancers);

export default store;
