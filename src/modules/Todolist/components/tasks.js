import '../styles/style.scss';
import { useParams } from 'react-router-dom';
import Task from './task';
import useFetchTodos from '../hooks/useFetchTodos';
import Spinner from '../../common/components/spinner';
import TodolistAddForm from './todolistAddForm';

const Tasks = () => {
  const { id } = useParams();

  const { data, isLoading } = useFetchTodos('todos', id);

  return (
    <>
      {isLoading && <Spinner />}
      <div className="tasks">
        <TodolistAddForm />
        {!isLoading && (
          data.map((item) => <Task key={item.id} {...item} />)
        )}
      </div>
    </>
  );
};

export default Tasks;
