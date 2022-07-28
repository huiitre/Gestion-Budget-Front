import '../styles/style.scss';

const CardList = ({
  name, category, percent, all_todos, active_todos, done_todos, created_at,
}) => (
  <div className="col-4 mb-4 mt-4">
    <div className="card">
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
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <h6 className="card-subtitle mb-2 text-muted">{category}</h6>
        <p className="card-text">Avancement : {percent}%</p>
        <p className="card-text">Todos : {all_todos}</p>
        <p className="card-text">Todos en cours : {active_todos}</p>
        <p className="card-text">Todos terminés : {done_todos}</p>
        <p className="card-text">Créé le {created_at}</p>
      </div>
      <a href="" className="btn btn-primary">Voir les todos</a>
    </div>
  </div>
);

export default CardList;
