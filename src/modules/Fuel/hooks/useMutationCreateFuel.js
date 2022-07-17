import axios from 'axios';
import { useMutation, useQueryClient } from 'react-query';
import { vehiclesQueryKeys } from '../../common/utils/keys-constants';

const useMutationCreateFuel = () => {
  const queryClient = useQueryClient();

  return useMutation(
    vehiclesQueryKeys.create(),
    async (fuel) => {
      console.log(`vehicule : ${fuel}`);
      const token = localStorage.getItem('TOKEN');
      const axiosInstance = axios.create({
        baseURL: `${process.env.REACT_APP_API_URL}`,
      });
      axiosInstance.defaults.headers.common.authorization = `Bearer ${token}`;
      const response = await axiosInstance.post('/fuel/create', fuel);
      return response;
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries();
      },
    },
  );
};

export default useMutationCreateFuel;
