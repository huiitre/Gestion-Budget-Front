import axios from 'axios';
import { useMutation, useQueryClient } from 'react-query';
import { transactionsQueryKeys } from '../../common/utils/keys-constants';

const useMutationCreateTransaction = (transaction) => {
  const queryClient = useQueryClient();

  return useMutation(
    transactionsQueryKeys.create(),
    async () => {
      const token = localStorage.getItem('TOKEN');
      const axiosInstance = axios.create({
        withCredentials: true,
        baseURL: `${process.env.REACT_APP_API_URL}`,
      });
      axiosInstance.defaults.headers.common.authorization = `Bearer ${token}`;
      const response = await axiosInstance.post('/transaction/create', transaction);
      return response;
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries();
      },
    },
  );
};

export default useMutationCreateTransaction;
