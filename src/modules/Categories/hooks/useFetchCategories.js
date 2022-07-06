import axios from 'axios';
import { useQuery } from 'react-query';
import { categoriesQueryKeys } from '../../common/utils/keys-constants';

const useFetchCategories = (key) => useQuery(
  categoriesQueryKeys[key](),
  async () => {
    const token = localStorage.getItem('TOKEN');
    const axiosInstance = axios.create({
      withCredentials: true,
      baseURL: `${process.env.REACT_APP_API_URL}`,
    });
    axiosInstance.defaults.headers.common.authorization = `Bearer ${token}`;
    const response = await axiosInstance.get('/category/list');

    return response.data;
  },
);

export default useFetchCategories;
