import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import {
  destroySession,
  setLoginFormErrMessage,
} from '../../../store/actions/user';
import AddVehicle from '../../common/components/form/addVehicle';

const Navigation = () => {
  const dispatch = useDispatch();
  const { name, mail, isLogged } = useSelector(
    (state) => state.user.currentUser,
  );

  const [isOpenAddVehicle, setIsOpenAddVehicle] = useState(false);
  const [isOpenAddFuel, setIsOpenAddFuel] = useState(false);

  const handleOpenAddVehicle = () => {
    setIsOpenAddVehicle(true);
  };

  const handleCloseAddVehicle = () => {
    setIsOpenAddVehicle(false);
  };

  return (
    <>
      <AddVehicle isOpen={isOpenAddVehicle} close={handleCloseAddVehicle} />
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
                <li className="nav-item">
                  <div
                    className="collapse navbar-collapse"
                    id="navbarNavDarkDropdown"
                  >
                    <ul className="navbar-nav">
                      <li className="nav-item dropdown">
                        <a
                          className="nav-link dropdown-toggle"
                          href="#"
                          id="navbarDarkDropdownMenuLink"
                          role="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          Conso Essence
                        </a>
                        <ul
                          className="dropdown-menu dropdown-menu-dark"
                          aria-labelledby="navbarDarkDropdownMenuLink"
                        >
                          <li>
                            <NavLink
                              to="/vehicule"
                              className="dropdown-item nav-link"
                            >
                              Liste
                            </NavLink>
                          </li>
                          <li>
                            <a
                              href=""
                              className="dropdown-item nav-link"
                              onClick={(e) => {
                                e.preventDefault();
                                handleOpenAddVehicle(true);
                              }}
                            >
                              Ajouter / supprimer un véhicule
                            </a>
                          </li>
                          <li>
                            <a
                              href=""
                              className="dropdown-item nav-link"
                              onClick={(e) => {
                                e.preventDefault();
                                handleOpenAddVehicle(true);
                              }}
                            >
                              Ajouter / supprimer un carburant
                            </a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
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
