import axios from 'axios';
import { useMutation, useQueryClient } from 'react-query';
import { transactionsQueryKeys } from '../../common/utils/keys-constants';

const useMutationDeleteTransaction = (ids) => {
  const queryClient = useQueryClient();
  const data = JSON.stringify(ids);

  return useMutation(
    transactionsQueryKeys.delete(),
    async () => {
      const url = `http://localhost:8080/api/transaction/delete?id=${data}`;
      const token = localStorage.getItem('TOKEN');
      const axiosInstance = axios.create({
        withCredentials: true,
        baseURL: url,
      });
      axiosInstance.defaults.headers.common.authorization = `Bearer ${token}`;
      const response = await axiosInstance.delete(url);
      return response;
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries();
      },
    },
  );
};

export default useMutationDeleteTransaction;
