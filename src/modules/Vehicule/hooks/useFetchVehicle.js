import axios from 'axios';
import { useQuery } from 'react-query';
import { vehiclesQueryKeys } from '../../common/utils/keys-constants';

const useFetchVehicle = (key) => useQuery(vehiclesQueryKeys[key](), async () => {
  const token = localStorage.getItem('TOKEN');
  const axiosInstance = axios.create({
    baseURL: `${process.env.REACT_APP_API_URL}`,
  });
  axiosInstance.defaults.headers.common.authorization = `Bearer ${token}`;
  const response = await axiosInstance.get('/vehicle/list');

  return response.data;
});

export default useFetchVehicle;
