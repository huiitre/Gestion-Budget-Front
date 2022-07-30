import axios from 'axios';
import { useMutation, useQueryClient } from 'react-query';
import { todolistQueryKeys } from '../../common/utils/keys-constants';

const useMutationCreateTodo = (todo) => {
  const queryClient = useQueryClient();
  return useMutation(
    todolistQueryKeys.create(),
    async () => {
      const token = localStorage.getItem('TOKEN');
      const axiosInstance = axios.create({
        baseURL: `${process.env.REACT_APP_API_URL}`,
      });
      axiosInstance.defaults.headers.common.authorization = `Bearer ${token}`;
      const response = await axiosInstance.post('/todolist/create/todo', todo);
      return response;
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries();
      },
    },
  );
};

export default useMutationCreateTodo;
