import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useFetchCategories from '../../Categories/hooks/useFetchCategories';
import useMutationCreateTodo from '../hooks/useMutationCreateTodo';
import '../styles/style.scss';
import Popup from '../../common/components/popup';

const TodolistAddForm = () => {
  const { data, isLoading } = useFetchCategories('list');

  const { id } = useParams();

  const [name, setName] = useState('');
  const [category, setCategory] = useState('');

  const [popup, setPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState([]);
  const [popupStatus, setPopupStatus] = useState('');

  const mutation = useMutationCreateTodo({ name, todolist: id, category });

  useEffect(() => {
    if (mutation.isSuccess || mutation.isError) {
      setPopup(true);
      setPopupMessage(mutation.data.data.msg);
      setPopupStatus(mutation.data.data.status);
      setTimeout(() => {
        setPopup(false);
        setPopupMessage([]);
        setPopupStatus('');
      }, 5000);
    }
  }, [mutation.isSuccess || mutation.isError]);

  const handleSubmit = (e) => {
    e.preventDefault();
    mutation.mutate();
  };

  return (
    <div className="task task--add">
      {popup && <Popup message={popupMessage} statusCode={popupStatus} />}
      <form onSubmit={handleSubmit}>
        <div className="task__content">
          <div className="task__title">
            <p className="task__title-label" />
            <input
              className="task__title-field input"
              type="text"
              placeholder="Titre de la tâche"
              name="title"
              onChange={(val) => setName(val.target.value)}
            />
          </div>
          <div className="task__category">
            <div className="select is-small">
              <select onChange={(val) => setCategory(val.target.value)}>
                <option value="">Choisir une catégorie</option>
                {!isLoading
                  && data.map((item) => (
                    <option value={item.id}>{item.name}</option>
                  ))}
              </select>
            </div>
          </div>
          <div className="task__buttons">
            <button
              type="submit"
              className={`task__button task__button--add button is-info ${
                mutation.isLoading && 'is-loading'
              }`}
            >
              <span className="icon is-small">
                <i className="fa fa-plus" />
              </span>
              <span>Ajouter</span>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default TodolistAddForm;
