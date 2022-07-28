/* eslint-disable spaced-comment */
import {
  Route,
  Routes as RouterRoutes,
  Navigate,
  useLocation,
  useNavigate,
} from 'react-router-dom';
import Err404 from 'src/modules/Errors/components/err404';
import Login from 'src/modules/Login/components/login';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import Home from './modules/Home/components/home';
import Navigation from './modules/Navigation/components/navigation';
import Transactions from './modules/Transactions/components/transactions';
import { destroySession, loadUser } from './store/actions/user';
import Spinner from './modules/common/components/spinner';
import TransactionAddPage from './pages/transactionAddPage';
import ConsoFuelHomePage from './pages/ConsoFuelHomePage';
import TodolistPage from './pages/TodolistPage';

const Routes = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const { isLogged } = useSelector((state) => state.user.currentUser);
  const { isLoading } = useSelector((state) => state.user.loginForm);

  useEffect(() => {
    if (localStorage.getItem('TOKEN') != null) {
      dispatch(loadUser());
    }
    else {
      dispatch(destroySession());
    }
  }, []);

  //? possible de mettre ça dans le premier useEffect
  useEffect(() => {
    const loc = location.pathname === '/login' ? '/' : location.pathname;
    navigate(loc);
  }, [isLogged]);

  return (
    <>
      <Navigation />
      {!isLoading ? (
        <RouterRoutes>
          {isLogged && (
            <>
              <Route path="/" element={<Home />} />
              <Route path="transactions" element={<Transactions />} />
              <Route path="transaction/add" element={<TransactionAddPage />} />
              <Route path="vehicule" element={<ConsoFuelHomePage />} />
              <Route path="todolist" element={<TodolistPage />} />
            </>
          )}
          {!isLogged && (
            <>
              <Route path="*" element={<Navigate to="/login" />} />
              <Route path="login" element={<Login />} />
            </>
          )}
          <Route path="*" element={<Err404 />} />
        </RouterRoutes>
      ) : (
        <Spinner />
      )}
    </>
  );
};

export default Routes;
