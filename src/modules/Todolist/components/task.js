/* eslint-disable max-len */
/* eslint-disable spaced-comment */
import { useCallback, useState } from 'react';
import { useParams } from 'react-router-dom';
import PopupArray from '../../common/components/popupArray';
import useMutationDeleteTodo from '../hooks/useMutationDeleteTodo';
import useMutationValidateTodo from '../hooks/useMutationValidateTodo';
import useMutationInvalidateTodo from '../hooks/useMutationInvalidateTodo';
import '../styles/style.scss';
import { TODOLIST_POPUP_DEFAULT_STATE } from '../todolist-constants';
import useMutationUpdateTodo from '../hooks/useMutationUpdateTodo';
import { useRef } from 'react';

const Task = ({
  id, name, percent, is_done, category,
}) => {
  //* récupération de la liste
  const { id: listId } = useParams();

  //* ref de l'input
  const inputRef = useRef(null);

  //* hooks todo
  const [todoName, setTodoName] = useState(name);

  //* hook popup
  const [{ isOpen, msg: popupMsg, status: popupStatus }, setPopup] = useState(TODOLIST_POPUP_DEFAULT_STATE);

  //* hook mode édition
  const [editMode, setEditMode] = useState(false);

  //* Gestion du popup asynchrone
  const onSettled = (data) => {
    const { msg, status } = data.data;
    setPopup({ isOpen: true, msg, status });

    setTimeout(() => {
      setPopup(TODOLIST_POPUP_DEFAULT_STATE);
    }, 5000);
  };

  //! Validation de la task
  const mutationValidate = useMutationValidateTodo({
    id, name: todoName, onSettled,
  });
  const handleValidate = useCallback(async () => {
    await mutationValidate.mutateAsync();
  });

  //! Invalidate de la task
  const mutationInvalidate = useMutationInvalidateTodo({ id, name: todoName, onSettled });
  const handleInvalidate = useCallback(async () => {
    await mutationInvalidate.mutateAsync();
  });

  //! Edition de la task
  const mutationUpdate = useMutationUpdateTodo({
    id, name: todoName, percent, onSettled,
  });
  const handleEditMode = useCallback(async () => {
    setEditMode(!editMode);
    inputRef.current.focus();
    //? pas logique ...
    if (editMode === true) {
      //todo on lance la mutation
      await mutationUpdate.mutateAsync();
    }
  });
  const handleKeyPress = (e) => {
    if (e.code === 'Enter') {
      handleEditMode();
    }
  };

  //! Suppression de la task
  const mutationDelete = useMutationDeleteTodo({ ids: [id], list: listId, onSettled });

  const handleDelete = useCallback(async () => {
    await mutationDelete.mutateAsync();
  }, []);

  //* Gestion de la classe de chaque task
  const classTodo = is_done == 1 ? 'task--complete' : 'task--todo';

  return (
    <>
      {isOpen && <PopupArray message={popupMsg} statusCode={popupStatus} />}
      <div className={`task ${classTodo} ${editMode && 'task--edit'}`}>
        <div className="task__content">
          <div className="task__title">
            <p
              className="task__title-label"
              onClick={() => {
                handleEditMode();
              }}
            >{name}
            </p>
            <input
              className="task__title-field input"
              type="text"
              placeholder="Titre de la tâche"
              name="title"
              onChange={(e) => setTodoName(e.target.value)}
              value={todoName}
              onBlur={handleEditMode}
              onKeyPress={handleKeyPress}
              ref={inputRef}
            />
          </div>
          <div className="task__category">
            <p>{category}</p>
            <input
              className="task__category-field input"
              type="text"
              placeholder="Nom de la catégorie"
              name="category"
            />
          </div>
          <div className="task__buttons">
            <button
              type="submit"
              className={`task__button task__button--incomplete button is-success is-small ${mutationInvalidate.isLoading && 'is-loading'}`}
              onClick={handleInvalidate}
            >
              <span className="icon is-small">
                <i className="fa fa-step-backward" />
              </span>
            </button>
            <button
              type="submit"
              className="task__button task__button--desarchive button is-success is-small"
            >
              <span className="icon is-small">
                <i className="fa fa-undo" />
              </span>
            </button>
            <button
              type="submit"
              className={`task__button task__button--validate button is-success is-small ${mutationValidate.isLoading && 'is-loading'}`}
              onClick={handleValidate}
            >
              <span className="icon is-small">
                <i className="fa fa-check-square-o" />
              </span>
            </button>
            <button
              type="submit"
              className={`task__button task__button--modify button is-warning is-small ${mutationUpdate.isLoading && 'is-loading'}`}
              onClick={handleEditMode}
            >
              <span className="icon is-small">
                <i className="fa fa-pencil-square-o" />
              </span>
            </button>
            <button
              type="button"
              onClick={handleDelete}
              className={`task__button task__button--archive button is-danger is-small ${mutationDelete.isLoading && 'is-loading'}`}
            >
              <span className="icon is-small">
                {/* Inversion du bouton archive avec trash */}
                <i className="fa fa-trash" />
              </span>
            </button>
            <button
              type="button"
              className="task__button task__button--delete button is-danger is-small"
            >
              <span className="icon is-small">
                {/* Inversion du bouton archive avec trash plus haut */}
                <i className="fa fa-archive" />
              </span>
            </button>
          </div>
        </div>
        <div className="progress-bar">
          <div
            className="progress-bar__level"
            style={{ width: `${percent}%` }}
          />
        </div>
      </div>
    </>
  );
};

export default Task;
