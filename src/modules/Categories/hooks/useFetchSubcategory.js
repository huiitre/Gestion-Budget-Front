import axios from 'axios';
import { useQuery } from 'react-query';
import { subcategoriesQueryKeys } from '../../common/utils/keys-constants';

const useFetchSubcategories = (key, val = null) => useQuery(
  subcategoriesQueryKeys[key](val),
  async () => {
    const url = `http://localhost:8080/api/subcategory/list/${val}`;
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

export default useFetchSubcategories;
