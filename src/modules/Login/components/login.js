/* eslint-disable arrow-body-style */
// import './style.scss';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from 'src/store/actions/user';

const Login = () => {
  console.log('env : ', process.env.NODE_ENV);
  console.log('url : ', process.env.REACT_APP_API_URL);
  const dispatch = useDispatch();
  const { errMessage } = useSelector((state) => state.user.loginForm);
  console.log(errMessage);
  //* hooks custom
  const [mail, setMail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="container col-3 my-4">
      <h2>Connexion</h2>
      <form
        className="mt-5"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(login(mail, password));
        }}
      >
        <div className="mb-3">
          <label htmlFor="mail" className="form-label">
            Adresse Email
          </label>
          <input
            type="mail"
            className="form-control"
            id="mail"
            placeholder="xxx@xxx.xx"
            name="mail"
            aria-describedby="errorBlockMail"
            value={mail}
            onChange={(e) => setMail(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Mot de passe
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="xxxxxxxx"
            aria-describedby="errorBlockPassword"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {errMessage && (
        <div className="alert alert-danger" role="alert">{errMessage}</div>
        )}
        <div className="d-grid gap-2" />
        <button type="submit" className="btn btn-primary mt-5">
          Valider
        </button>
      </form>
    </div>

  /* </div> */
  );
};

export default Login;
