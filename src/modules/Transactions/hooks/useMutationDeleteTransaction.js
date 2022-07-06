import axios from 'axios';
import { useMutation, useQueryClient } from 'react-query';
import { transactionsQueryKeys } from '../../common/utils/keys-constants';

const useMutationDeleteTransaction = (ids) => {
  const queryClient = useQueryClient();
  const data = JSON.stringify(ids);

  return useMutation(
    transactionsQueryKeys.delete(),
    async () => {
      const token = localStorage.getItem('TOKEN');
      const axiosInstance = axios.create({
        baseURL: `${process.env.REACT_APP_API_URL}`,
      });
      axiosInstance.defaults.headers.common.authorization = `Bearer ${token}`;
      const response = await axiosInstance.delete(`/transaction/delete?id=${data}`);
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
