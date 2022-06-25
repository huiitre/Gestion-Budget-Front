import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { destroySession, setLoginFormErrMessage } from '../../../store/actions/user';

const Navigation = () => {
  const dispatch = useDispatch();
  const { name, mail, isLogged } = useSelector(
    (state) => state.user.currentUser,
  );

  return (
    <>
      {isLogged && (
        <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <NavLink to="/app" className="navbar-brand">
              Bienvenue {name}
            </NavLink>
            <div className="navbar-brand">Email : {mail}</div>
            <button
              type="button"
              onClick={() => {
                dispatch(destroySession());
                dispatch(setLoginFormErrMessage(''));
              }}
            >
              Déconnexion
            </button>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>

            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <NavLink to="/" className="nav-link">
                    Accueil
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/transactions" className="nav-link">
                    Transactions
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      )}
    </>
  );
};

export default Navigation;
