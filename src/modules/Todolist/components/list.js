import Spinner from '../../common/components/spinner';
import useFetchTodolist from '../hooks/useFetchTodolist';
import '../styles/style.scss';
import CardList from './cardList';

const List = () => {
  const { data, isLoading } = useFetchTodolist('list');
  return (
    <div className="row">
      {isLoading && <Spinner />}
      {!isLoading && (
        data.map((item) => <CardList key={item.id} {...item} />)
      )}
    </div>
  );
};

export default List;
