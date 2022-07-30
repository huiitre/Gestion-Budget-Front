import axios from 'axios';
import { useMutation, useQueryClient } from 'react-query';
import { todolistQueryKeys } from '../../common/utils/keys-constants';

const useMutationValidateTodo = ({
  id, name, onSettled,
}) => {
  const queryClient = useQueryClient();
  return useMutation(
    todolistQueryKeys.patch(),
    async () => {
      const data = { id, name, percent: 100 };
      const token = localStorage.getItem('TOKEN');
      const axiosInstance = axios.create({
        baseURL: `${process.env.REACT_APP_API_URL}`,
      });
      axiosInstance.defaults.headers.common.authorization = `Bearer ${token}`;
      const response = await axiosInstance.patch('/todolist/update/todo', data);
      return response;
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries();
      },
      onSettled,
    },
  );
};

export default useMutationValidateTodo;