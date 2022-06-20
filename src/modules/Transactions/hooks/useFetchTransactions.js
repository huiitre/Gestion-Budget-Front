import { useQuery } from 'react-query';
import axios from 'axios';

const useFetchTransactions = () => useQuery(
  'transaction',
  async () => {
    const url = 'http://localhost:8080/api/transaction/list/month';
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
