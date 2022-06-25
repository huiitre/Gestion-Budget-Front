import { useQuery } from 'react-query';
import axios from 'axios';
import { transactionsQueryKeys } from '../../common/utils/keys-constants';

const useFetchTransactions = (key, limit = 0) => useQuery(
  transactionsQueryKeys[key](limit),
  async () => {
    const limitStr = limit > 0 ? `?limit=${limit}` : '';
    const url = `http://localhost:8080/api/transaction/list/month${limitStr}`;
    const token = localStorage.getItem('TOKEN');
    const axiosInstance = axios.create({
      withCredentials: true,
      baseURL: url,
    });
    axiosInstance.defaults.headers.common.authorization = `Bearer ${token}`;
    const response = await axiosInstance.get(url);

    return response.data;
  },
);

/* const useFetchTransactions = () => {
  const url = 'http://localhost:8080/api/transaction/list/month';

  axios.get(url)
    .then((response) => {

    });
}; */

export default useFetchTransactions;
