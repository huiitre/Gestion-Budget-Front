import axios from 'axios';
import { useMutation, useQueryClient } from 'react-query';
import { vehiclesQueryKeys } from '../../common/utils/keys-constants';

const useMutationCreateVehicle = () => {
  const queryClient = useQueryClient();

  return useMutation(
    vehiclesQueryKeys.create(),
    async (vehicle) => {
      console.log(`vehicule : ${vehicle}`);
      const token = localStorage.getItem('TOKEN');
      const axiosInstance = axios.create({
        baseURL: `${process.env.REACT_APP_API_URL}`,
      });
      axiosInstance.defaults.headers.common.authorization = `Bearer ${token}`;
      const response = await axiosInstance.post('/vehicle/create', vehicle);
      return response;
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries();
      },
    },
  );
};

export default useMutationCreateVehicle;
