import {
  BrowserRouter,
  Route,
  Routes as RouterRoutes,
  Navigate,
} from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import Err404 from 'src/modules/Errors/components/err404';
import Login from 'src/modules/Login/components/login';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import Home from './modules/Home/components/home';
import Navigation from './modules/Navigation/components/navigation';
import Transactions from './modules/Transactions/components/transactions';
import { destroySession, loadUser } from './store/actions/user';

const Routes = () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 60000 * 24,
        refetchOnWindowFocus: false,
      },
    },
  });

  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem('TOKEN') != null) {
      dispatch(loadUser());
    }
    else {
      dispatch(destroySession());
    }
  }, []);

  const { isLogged } = useSelector((state) => state.user.currentUser);

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Navigation />
        <RouterRoutes>
          {isLogged && (
          <Route path="app">
            <Route
              path=""
              element={<Home />}
            />
            ,
            <Route
              path="transactions"
              element={<Transactions />}
            />
          </Route>
          )}

          <Route path="/">
            <Route path="" element={<Navigate to="/login" />} />
            <Route
              path="login"
              element={isLogged ? <Navigate to="/app" /> : <Login />}
            />
            <Route
              path="*"
              element={isLogged ? <Err404 /> : <Navigate to="/login" />}
            />
          </Route>
        </RouterRoutes>
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default Routes;
