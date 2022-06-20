// == Import
import '../styles/index.scss';

// == Composant
const Home = () => (
  <div className="app">
    <div className="container my-4">
      <p className="display-4">
        Bienvenue dans mon backOffice
      </p>

      <div className="row mt-5">
        <div className="col-12 col-md-6">
          <div className="card text-white mb-3">
            <div className="card-header bg-primary">Liste des catégories</div>
            <div className="card-body">
              <table className="table table-hover">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Nom</th>
                    <th scope="col" />
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Détente</td>
                    <td className="text-end">
                      <a href="" className="btn btn-sm btn-warning">
                        <i className="fa fa-pencil-square-o" aria-hidden="true" />
                      </a>
                      <div className="btn-group">
                        <button
                          type="button"
                          className="btn btn-sm btn-danger dropdown-toggle"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          <i className="fa fa-trash-o" aria-hidden="true" />
                        </button>
                        <div className="dropdown-menu">
                          <a className="dropdown-item" href="#">
                            Oui, je veux supprimer
                          </a>
                          <a
                            className="dropdown-item"
                            href=""
                            data-toggle="dropdown"
                          >
                            Oups !
                          </a>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Au travail</td>
                    <td className="text-end">
                      <a href="" className="btn btn-sm btn-warning">
                        <i className="fa fa-pencil-square-o" aria-hidden="true" />
                      </a>
                      <div className="btn-group">
                        <button
                          type="button"
                          className="btn btn-sm btn-danger dropdown-toggle"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          <i className="fa fa-trash-o" aria-hidden="true" />
                        </button>
                        <div className="dropdown-menu">
                          <a className="dropdown-item" href="#">
                            Oui, je veux supprimer
                          </a>
                          <a
                            className="dropdown-item"
                            href="#"
                            data-toggle="dropdown"
                          >
                            Oups !
                          </a>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>Cérémonie</td>
                    <td className="text-end">
                      <a href="" className="btn btn-sm btn-warning">
                        <i className="fa fa-pencil-square-o" aria-hidden="true" />
                      </a>
                      <div className="btn-group">
                        <button
                          type="button"
                          className="btn btn-sm btn-danger dropdown-toggle"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          <i className="fa fa-trash-o" aria-hidden="true" />
                        </button>
                        <div className="dropdown-menu">
                          <a className="dropdown-item" href="#">
                            Oui, je veux supprimer
                          </a>
                          <a
                            className="dropdown-item"
                            href="#"
                            data-toggle="dropdown"
                          >
                            Oups !
                          </a>
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className="d-grid gap-2">
                <a href="categories.html" className="btn btn-success">
                  Voir plus
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6">
          <div className="card text-white mb-3">
            <div className="card-header bg-primary">Liste des produits</div>
            <div className="card-body">
              <table className="table table-hover">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Nom</th>
                    <th scope="col" />
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Kissing</td>
                    <td className="text-end">
                      <a href="" className="btn btn-sm btn-warning">
                        <i className="fa fa-pencil-square-o" aria-hidden="true" />
                      </a>
                      <div className="btn-group">
                        <button
                          type="button"
                          className="btn btn-sm btn-danger dropdown-toggle"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          <i className="fa fa-trash-o" aria-hidden="true" />
                        </button>
                        <div className="dropdown-menu">
                          <a className="dropdown-item" href="#">
                            Oui, je veux supprimer
                          </a>
                          <a
                            className="dropdown-item"
                            href="#"
                            data-toggle="dropdown"
                          >
                            Oups !
                          </a>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Pink Lady</td>
                    <td className="text-end">
                      <a href="" className="btn btn-sm btn-warning">
                        <i className="fa fa-pencil-square-o" aria-hidden="true" />
                      </a>
                      <div className="btn-group">
                        <button
                          type="button"
                          className="btn btn-sm btn-danger dropdown-toggle"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          <i className="fa fa-trash-o" aria-hidden="true" />
                        </button>
                        <div className="dropdown-menu">
                          <a className="dropdown-item" href="#">
                            Oui, je veux supprimer
                          </a>
                          <a
                            className="dropdown-item"
                            href="#"
                            data-toggle="dropdown"
                          >
                            Oups !
                          </a>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>Panda</td>
                    <td className="text-end">
                      <a href="" className="btn btn-sm btn-warning">
                        <i className="fa fa-pencil-square-o" aria-hidden="true" />
                      </a>
                      <div className="btn-group">
                        <button
                          type="button"
                          className="btn btn-sm btn-danger dropdown-toggle"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          <i className="fa fa-trash-o" aria-hidden="true" />
                        </button>
                        <div className="dropdown-menu">
                          <a className="dropdown-item" href="#">
                            Oui, je veux supprimer
                          </a>
                          <a
                            className="dropdown-item"
                            href="#"
                            data-toggle="dropdown"
                          >
                            Oups !
                          </a>
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className="d-grid gap-2">
                <a href="products.html" className="btn btn-success">
                  Voir plus
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// == Export
export default Home;
