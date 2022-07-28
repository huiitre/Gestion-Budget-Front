import '../styles/style.scss';

const Task = () => (
  <div className="task" data-category="Courses">
    <div className="task__content">
      <div className="task__title">
        <p className="task__title-label">titre</p>
        <input
          className="task__title-field input"
          type="text"
          value=""
          placeholder="Titre de la tâche"
          name="title"
        />
      </div>
      <div className="task__category">
        <p>category</p>
        <input
          className="task__category-field input"
          type="text"
          value=""
          placeholder="Nom de la catégorie"
          name="category"
        />
      </div>
      <div className="task__buttons">
        <button type="submit" className="task__button task__button--incomplete button is-success is-small">
          <span className="icon is-small">
            <i className="fa fa-step-backward" />
          </span>
        </button>
        <button type="submit" className="task__button task__button--desarchive button is-success is-small">
          <span className="icon is-small">
            <i className="fa fa-undo" />
          </span>
        </button>
        <button type="submit" className="task__button task__button--validate button is-success is-small">
          <span className="icon is-small">
            <i className="fa fa-check-square-o" />
          </span>
        </button>
        <button type="submit" className="task__button task__button--modify button is-warning is-small">
          <span className="icon is-small">
            <i className="fa fa-pencil-square-o" />
          </span>
        </button>
        <button type="submit" className="task__button task__button--archive button is-danger is-small">
          <span className="icon is-small">
            <i className="fa fa-archive" />
          </span>
        </button>
        <button type="submit" className="task__button task__button--delete button is-danger is-small">
          <span className="icon is-small">
            <i className="fa fa-trash" />
          </span>
        </button>
      </div>
    </div>
    <div className="progress-bar">
      <div className="progress-bar__level" style={{ width: '0%' }} />
    </div>
  </div>
);

export default Task;
