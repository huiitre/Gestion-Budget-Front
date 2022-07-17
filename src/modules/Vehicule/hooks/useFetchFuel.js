import axios from 'axios';
import { useQuery } from 'react-query';
import { fuelQueryKeys } from '../../common/utils/keys-constants';

const useFetchFuel = (key) => useQuery(fuelQueryKeys[key](), async () => {
  const token = localStorage.getItem('TOKEN');
  const axiosInstance = axios.create({
    baseURL: `${process.env.REACT_APP_API_URL}`,
  });
  axiosInstance.defaults.headers.common.authorization = `Bearer ${token}`;
  const response = await axiosInstance.get('/fuel/list');

  return response.data;
});

export default useFetchFuel;
