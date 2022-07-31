/* eslint-disable max-len */
import { useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
import PopupArray from '../../common/components/popupArray';
import useMutationDeleteTodolist from '../hooks/useMutationDeleteTodolist';
import '../styles/cardList.scss';
import { TODOLIST_POPUP_DEFAULT_STATE } from '../todolist-constants';

const CardList = ({
  name,
  category,
  percent,
  all_todos,
  active_todos,
  done_todos,
  created_at,
  id,
}) => {
  const [{ isOpen, msg: popupMsg, status: popupStatus }, setPopup] = useState(
    TODOLIST_POPUP_DEFAULT_STATE,
  );

  const onSettled = (data) => {
    const { msg, status } = data.data;
    setPopup({ isOpen: true, msg, status });

    setTimeout(() => {
      setPopup(TODOLIST_POPUP_DEFAULT_STATE);
    }, 5000);
  };

  const mutationDelete = useMutationDeleteTodolist({ ids: [id], onSettled });
  const handleDelete = useCallback(async () => {
    await mutationDelete.mutateAsync();
  }, []);
  return (
    <>
      {isOpen && <PopupArray message={popupMsg} statusCode={popupStatus} />}
      <div className="col-4 mb-4 mt-4">
        <div className="card">
          <div className="card-header">
            <h2 className="card-title">{name}</h2>
            <div className="card-button">
              <button
                type="button"
                className="button is-danger is-small"
                onClick={handleDelete}
              >
                <span className="icon is-small">
                  <i className={`${mutationDelete.isLoading ? 'spinner-border spinner-border-sm' : 'fa fa-trash'}`} />
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
    </>
  );
};

export default CardList;
