import axios from 'axios';
import { useQuery } from 'react-query';
import { transactionsQueryKeys } from '../../common/utils/keys-constants';

const useFetchFuelTransaction = (key) => useQuery(transactionsQueryKeys[key](), async () => {
  const token = localStorage.getItem('TOKEN');
  const axiosInstance = axios.create({
    baseURL: `${process.env.REACT_APP_API_URL}`,
  });
  axiosInstance.defaults.headers.common.authorization = `Bearer ${token}`;
  const response = await axiosInstance.get('/transaction/essence');

  return response.data;
});

export default useFetchFuelTransaction;
