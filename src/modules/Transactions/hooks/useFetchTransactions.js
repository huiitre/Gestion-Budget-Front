import { useInfiniteQuery } from 'react-query';
import axios from 'axios';
import { transactionsQueryKeys } from '../../common/utils/keys-constants';

const useFetchTransactions = (key, limit) => useInfiniteQuery(
  transactionsQueryKeys[key](),
  async ({ pageParam, hasNextPage }) => {
    let url = '';
    if (limit) {
      url = pageParam === undefined ? `http://localhost:8080/api/transaction/list/month?limit=${limit}&offset=${0}` : pageParam;
    }
    else {
      url = 'http://localhost:8080/api/transaction/list/month';
    }

    const token = localStorage.getItem('TOKEN');
    const axiosInstance = axios.create({
      withCredentials: true,
      baseURL: url,
    });
    axiosInstance.defaults.headers.common.authorization = `Bearer ${token}`;
    const response = await axiosInstance.get(url);

    return response.data;
  },
  {
    getNextPageParam: (lastPage, pages) => {
      console.log('last page : ', lastPage.next);
      if (!lastPage.next === null) {
        return null;
      }
      return lastPage.next;
    },
  },
);

export default useFetchTransactions;
