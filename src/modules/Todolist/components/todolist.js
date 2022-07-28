import '../styles/style.scss';
import List from './list';
import Tasks from './tasks';
import TodolistAddForm from './todolistAddForm';

const Todolist = () => (
  <div className="todolist">
    {/* On vient afficher le composant qui contiendra toutes les listes */}
    <List />
  </div>
);

export default Todolist;
