import useAxios from '../../common/utils/axios-instance';

const useFetchCreateTransaction = async () => {
  const token = localStorage.getItem('TOKEN');
  const axiosInstance = useAxios('/transaction/create');
  const response = axiosInstance.post();
};

export default useFetchCreateTransaction;
