import { useInfiniteQuery } from 'react-query';
import axios from 'axios';
import { transactionsQueryKeys } from '../../common/utils/keys-constants';

const useFetchTransactions = (key) => useInfiniteQuery(
  transactionsQueryKeys[key](),
  async ({ pageParam, hasNextPage }) => {
    const token = localStorage.getItem('TOKEN');
    const axiosInstance = axios.create({
      withCredentials: true,
      baseURL: `${process.env.REACT_APP_API_URL}/api`,
    });
    axiosInstance.defaults.headers.common.authorization = `Bearer ${token}`;
    const response = await axiosInstance.get('/transaction/list');

    return response.data;
  },
  {
    getNextPageParam: (lastPage, pages) => {
      if (!lastPage.next === null) {
        return null;
      }
      return lastPage.next;
    },
  },
);

export default useFetchTransactions;
