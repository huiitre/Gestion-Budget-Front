/* eslint-disable no-unused-expressions */
/* eslint-disable max-len */
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Checkbox from '@mui/material/Checkbox';
import Spinner from '../../common/components/spinner';
import useFetchTransactions from '../hooks/useFetchTransactions';
import TransactionItem from './transactionItem';
import useMutationDeleteTransaction from '../hooks/useMutationDeleteTransaction';
import Popup from '../../common/components/popup';

const Transactions = () => {
  const { data, isLoading } = useFetchTransactions('list');
  const [transactionsList, setTransactionsList] = useState([]);

  const mutation = useMutationDeleteTransaction(transactionsList);
  const handleDelete = (id) => {
    console.log(id);
    mutation.mutate();
    mutation.isSuccess && setTransactionsList([]);
  };

  console.log('data : ', data);

  return (
    <div className="container my-4">
      {mutation.isSuccess && <Popup statusCode={mutation.data.data.status_code} message={mutation.data.data.message} />}
      {/* <Popup message="test test test" /> */}
      <Link to="/transaction/add" className="btn btn-success float-end">
        Ajouter
      </Link>
      <h2>Liste des transactions</h2>
      <table className="table table-hover mt-4">
        <thead>
          <tr>
            <th scope="col"><button type="button" className="btn btn-danger" onClick={handleDelete}>Supprimer</button></th>
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
          {!isLoading ? (
            data.pages[0].data.map((item) => (
              <TransactionItem {...item} key={item.t_id} onSelected={setTransactionsList} transactionsList={transactionsList} onChange={handleDelete} />
            ))
          ) : (
            <Spinner />
          )}
        </tbody>
      </table>
    </div>
  );
};
export default Transactions;
