import useFetchTodolist from '../hooks/useFetchTodolist';
import '../styles/style.scss';
import CardList from './cardList';

const List = () => {
  const { data, isLoading } = useFetchTodolist('list');
  console.log(data);
  return (
    <div className="row">
      {!isLoading && (
        data.map((item) => <CardList key={item.id} {...item} />)
      )}
    </div>
  );
};

export default List;
