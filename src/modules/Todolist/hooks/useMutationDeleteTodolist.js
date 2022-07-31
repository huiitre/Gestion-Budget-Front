/* eslint-disable spaced-comment */
import axios from 'axios';
import { useMutation, useQueryClient } from 'react-query';
import { todolistQueryKeys } from '../../common/utils/keys-constants';

const useMutationDeleteTodolist = ({ ids, list, onSettled }) => {
  const queryClient = useQueryClient();
  return useMutation(
    todolistQueryKeys.delete(),
    async () => {
      const data = { ids, list };
      const token = localStorage.getItem('TOKEN');
      const axiosInstance = axios.create({
        baseURL: `${process.env.REACT_APP_API_URL}`,
      });
      axiosInstance.defaults.headers.common.authorization = `Bearer ${token}`;
      const response = await axiosInstance.delete('/todolist/delete/list', { data });
      return response;
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries();
      },
      //? équivalent à finally
      onSettled,
    },
  );
};

export default useMutationDeleteTodolist;
