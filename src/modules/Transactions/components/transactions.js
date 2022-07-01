/* eslint-disable spaced-comment */
/* eslint-disable no-unused-expressions */
/* eslint-disable max-len */
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Box, Button } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import { DataGrid } from '@mui/x-data-grid';
import Spinner from '../../common/components/spinner';
import useFetchTransactions from '../hooks/useFetchTransactions';
import useMutationDeleteTransaction from '../hooks/useMutationDeleteTransaction';
import Popup from '../../common/components/popup';
import getMonthNameFromDate from '../../common/utils/getMonthNameFromDate';
import getYearIntegetFromDate from '../../common/utils/getYearIntegerFromDate';

const Transactions = () => {
  const currentMonth = getMonthNameFromDate();
  const currentYear = getYearIntegetFromDate();

  const { data, isLoading } = useFetchTransactions('list');
  const [transactionsList, setTransactionsList] = useState([]);

  const mutation = useMutationDeleteTransaction(transactionsList);
  const handleDelete = () => {
    mutation.mutate();
    mutation.isSuccess && setTransactionsList([]);
  };

  //TODO dynaminer les colonnes en fonction des data qui arrivent
  const columns = [
    { field: 't_id', headerName: 'ID', width: 100 },
    { field: 't_name', headerName: 'Nom', width: 100 },
    { field: 't_wording', headerName: 'Libellé', width: 100 },
    { field: 't_balance', headerName: 'Montant', width: 100 },
    { field: 't_created_at', headerName: 'Créé le', width: 100 },
    { field: 't_status', headerName: 'Status', width: 100 },
    { field: 't_slug', headerName: 'Slug', width: 100 },
    { field: 'c_id', headerName: 'Catégorie - ID', width: 100 },
    { field: 'c_name', headerName: 'Catégorie - Nom', width: 100 },
    { field: 's_id', headerName: 'Sous-catégorie - ID', width: 100 },
    { field: 's_name', headerName: 'Sous-catégorie - Nom', width: 100 },
  ];

  console.log(data);

  return (
    <div className="container my-4">
      {mutation.isSuccess && (
        <Popup
          statusCode={mutation.data.data.status_code}
          message={mutation.data.data.message}
        />
      )}
      <h2>
        Solde du mois de {currentMonth} {currentYear} :{' '}
        {!isLoading && data.pages[0].total.total_balance} €
      </h2>
      <Box sx={{ height: 600, width: '100%' }}>
        <DataGrid
          rows={!isLoading && data.pages[0].data}
          columns={columns}
          getRowId={(row) => row.t_id}
          checkboxSelection
          onSelectionModelChange={(row) => {
            setTransactionsList(row);
          }}
          selectionModel={transactionsList}
        />
        <Link to="/transaction/add">
          <Button className="m-2" variant="contained" color="success">
            Ajouter
          </Button>
        </Link>
        <LoadingButton
          loading={mutation.isLoading}
          className="m-2"
          color="error"
          variant="contained"
          onClick={(array) => handleDelete(array)}
          type="submit"
        >
          Delete
        </LoadingButton>
      </Box>
    </div>
  );
};
export default Transactions;
