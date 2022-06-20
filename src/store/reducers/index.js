import { combineReducers } from 'redux';
// import { bindActionCreators } from 'redux';
// à ajouter/comprendre si besoin (chatroom de julien)

//* on importe nos différents reducers (slices)
import userReducer from './user';

const rootReducer = combineReducers({
  user: userReducer,
});

export default rootReducer;
