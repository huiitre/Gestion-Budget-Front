import axios from 'axios';
import { useMutation, useQueryClient } from 'react-query';
import { todoQueryKeys } from '../../common/utils/keys-constants';

const useMutationInvalidateTodo = ({
  id, name, onSettled,
}) => {
  const queryClient = useQueryClient();
  return useMutation(
    todoQueryKeys.patch(),
    async () => {
      const data = { id, name, percent: 0 };
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

export default useMutationInvalidateTodo;
