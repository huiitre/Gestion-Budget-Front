import axios from 'axios';
import { useMutation, useQueryClient } from 'react-query';
import { transactionsQueryKeys } from '../../common/utils/keys-constants';

const useMutationCreateTransaction = (transaction) => {
  const queryClient = useQueryClient();

  return useMutation(
    transactionsQueryKeys.create(),
    async () => {
      const url = 'http://localhost:8080/api/transaction/create';
      const token = localStorage.getItem('TOKEN');
      const axiosInstance = axios.create({
        withCredentials: true,
        baseURL: url,
      });
      axiosInstance.defaults.headers.common.authorization = `Bearer ${token}`;
      const response = await axiosInstance.post(url, transaction);
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
