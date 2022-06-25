import axios from 'axios';
import { useQuery } from 'react-query';
import { categoriesQueryKeys } from '../../common/utils/keys-constants';

const useFetchCategories = (key) => useQuery(
  categoriesQueryKeys[key](),
  async () => {
    const url = 'http://localhost:8080/api/category/list';
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

export default useFetchCategories;
