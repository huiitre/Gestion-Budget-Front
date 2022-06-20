/* eslint-disable max-len */
import { useEffect } from 'react';
import Spinner from '../../common/components/spinner';
import useFetchTransactions from '../hooks/useFetchTransactions';
import '../styles/index.scss';
import TransactionItem from './transactionItem';
// import axios from 'axios';

const Transactions = () => {
  /* const url = 'http://localhost:8080/api/transaction/list/month';
  const axiosInstance = axios.create({
    withCredentials: true,
    baseURL: url,
  });
  axiosInstance.defaults.headers.common.authorization = 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2NTU1OTY4MTYsImV4cCI6MTY1NTYzMjgxNiwicm9sZXMiOlsiUk9MRV9VU0VSIl0sInVzZXJuYW1lIjoiYUBhLmZyIn0.SNIgmMFHhBVyt_F7TT15CI_KKx_J3GH3DlgUY_aHGeVZct6AZmom2hVMjWC21cB2z0onVxLykegwdNdPTOjO7FPoIQCPdKRYjdUs_7KgHLDbnMOw1AdODQvYMq2b5O2RwuQX7tbOIQBnoosrVvduDV8aMAHTU2Jr-ZN-QImx_blmAj9jggjPCAt1wv19vv5MQafKw-FTmwbUEo0Huxu1xb_-aeasRapgCVRdF7tsGpO29u_d47ZgDKxvTMSjSpK-pJ9ilv0NMo21q0_SYVWSndH_L-nKlYCNTwiG9rux-q89KnFyxa0KbgdGUXl3tcd54jtJiwI9--UvU3jBNtEKtw';

  axiosInstance.get(url)
  .then((response) => {
    console.log(response.data);
  }); */

  const { data, isLoading } = useFetchTransactions();
  const test = true;
  return (
    <div className="container my-4">

      <a
        href="<?= $router->generate('product-add') ?>"
        className="btn btn-success float-end"
      >
        Ajouter
      </a>
      <h2>Liste des transactions</h2>
      <table className="table table-hover mt-4">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nom</th>
            <th scope="col">Libellé</th>
            <th scope="col">Montant</th>
            <th scope="col">Catégorie</th>
            <th scope="col">Sous-catégorie</th>
            <th scope="col">Date de création</th>
            <th scope="col" />
          </tr>
        </thead>
        <tbody>
          {!isLoading ? data.map((item) => <TransactionItem {...item} key={item.t_id} />) : <Spinner />}
        </tbody>
      </table>
    </div>
  );
};
export default Transactions;
