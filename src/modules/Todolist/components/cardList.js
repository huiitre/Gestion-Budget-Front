import { Link } from 'react-router-dom';
import '../styles/cardList.scss';

const CardList = ({
  name,
  category,
  percent,
  all_todos,
  active_todos,
  done_todos,
  created_at,
  id,
}) => (
  <div className="col-4 mb-4 mt-4">
    <div className="card">
      <div className="card-header">
        <h2 className="card-title">{name}</h2>
        <div className="card-button">
          <button type="submit" className="button is-warning is-small">
            <span className="icon is-small">
              <i className="fa fa-pencil-square-o" />
            </span>
          </button>
          <button type="button" className="button is-danger is-small">
            <span className="icon is-small">
              <i className="fa fa-trash" />
            </span>
          </button>
        </div>
      </div>

      <div className="card-body">
        <h6 className="card-subtitle mb-2 text-muted">{category}</h6>
        <p className="card-text">Avancement : {percent}%</p>
        <p className="card-text">Todos : {all_todos}</p>
        <p className="card-text">Todos terminés : {done_todos}</p>
        <p className="card-text">Todos en cours : {active_todos}</p>
        <p className="card-text">Créé le {created_at}</p>
      </div>
      <div className="card-footer m-auto">
        <Link to={`/todolist/${id}`} className="btn btn-primary">
          Voir la liste
        </Link>
      </div>
    </div>
  </div>
);

export default CardList;
