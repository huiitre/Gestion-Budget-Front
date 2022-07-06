import axios from 'axios';
import { useQuery } from 'react-query';
import { subcategoriesQueryKeys } from '../../common/utils/keys-constants';

const useFetchSubcategories = (key, val = null) => useQuery(
  subcategoriesQueryKeys[key](val),
  async () => {
    const token = localStorage.getItem('TOKEN');
    const axiosInstance = axios.create({
      baseURL: `${process.env.REACT_APP_API_URL}`,
    });
    axiosInstance.defaults.headers.common.authorization = `Bearer ${token}`;
    const response = await axiosInstance.get(`/subcategory/list/${val}`);

    return response.data;
  },
);

export default useFetchSubcategories;
