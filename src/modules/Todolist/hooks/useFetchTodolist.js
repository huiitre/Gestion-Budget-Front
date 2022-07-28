import axios from 'axios';
import { useQuery } from 'react-query';
import { todolistQueryKeys } from '../../common/utils/keys-constants';

const useFetchTodolist = (key) => useQuery(
  todolistQueryKeys[key](),
  async () => {
    const token = localStorage.getItem('TOKEN');
    const axiosInstance = axios.create({
      baseURL: `${process.env.REACT_APP_API_URL}`,
    });
    axiosInstance.defaults.headers.common.authorization = `Bearer ${token}`;
    const response = await axiosInstance.get('/todolist/list');
    return response.data;
  },
);

export default useFetchTodolist;
