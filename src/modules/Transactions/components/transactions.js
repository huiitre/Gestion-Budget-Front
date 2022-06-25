/* eslint-disable max-len */
import { Link } from 'react-router-dom';
import Spinner from '../../common/components/spinner';
import useFetchTransactions from '../hooks/useFetchTransactions';
import TransactionItem from './transactionItem';

const Transactions = () => {
  const { data, isLoading } = useFetchTransactions('list');
  return (
    <div className="container my-4">

      <Link to="/transaction/add" className="btn btn-success float-end">
        Ajouter
      </Link>
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
          {!isLoading ? data.data.map((item) => <TransactionItem {...item} key={item.t_id} />) : <Spinner />}
        </tbody>
      </table>
    </div>
  );
};
export default Transactions;
