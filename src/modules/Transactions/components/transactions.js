/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable spaced-comment */
/* eslint-disable no-unused-expressions */
/* eslint-disable max-len */
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Box, Button } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import { DataGrid } from '@mui/x-data-grid';
import useFetchTransactions from '../hooks/useFetchTransactions';
import useMutationDeleteTransaction from '../hooks/useMutationDeleteTransaction';
import Popup from '../../common/components/popup';
import { monthToString, months } from '../../common/utils/getMonthNameFromDate';
import getYearIntegetFromDate from '../../common/utils/getYearIntegerFromDate';

const Transactions = () => {
  //* hooks des dates
  const [month, setMonth] = useState(new Date().getMonth() + 1);
  const [year, setYear] = useState(new Date().getFullYear());

  //* on transforme l'id du mois en string
  const { name: currentMonth } = monthToString(month);

  const fetch = useFetchTransactions('list', { month, year });
  const [transactionsList, setTransactionsList] = useState([]);

  console.log(!fetch.isLoading && fetch.data.pages[0].total.total_balance);

  const mutation = useMutationDeleteTransaction(transactionsList);
  const handleDelete = () => {
    mutation.mutate();
    mutation.isSuccess && setTransactionsList([]);
  };

  //TODO dynaminer les colonnes en fonction des data qui arrivent
  const columns = [
    { field: 't_id', headerName: 'ID', width: 50 },
    { field: 't_name', headerName: 'Nom', width: 250 },
    { field: 't_wording', headerName: 'Libellé', width: 250 },
    { field: 't_balance', headerName: 'Montant', width: 100 },
    { field: 't_created_at', headerName: 'Créé le', width: 250 },
    {
      field: 't_status',
      headerName: 'Status',
      width: 50,
      valueFormatter: (params) => {
        if (params.value == 1) {
          return '✅';
        }
        return '❌';
      },
    },
    { field: 't_slug', headerName: 'Slug', width: 250 },
    { field: 'c_id', headerName: 'Catégorie - ID', width: 50 },
    { field: 'c_name', headerName: 'Catégorie - Nom', width: 250 },
    { field: 's_id', headerName: 'Sous-catégorie - ID', width: 50 },
    { field: 's_name', headerName: 'Sous-catégorie - Nom', width: 250 },
  ];

  return (
    <div className="container my-4">
      {mutation.isSuccess && (
        <Popup
          statusCode={mutation.data.data.status_code}
          message={mutation.data.data.message}
        />
      )}
      <form onSubmit={((e) => {
        e.preventDefault();
        fetch.refetch();
      })}
      >
        <label htmlFor="month">Mois : </label>
        <select id="month" onChange={(e) => setMonth(e.target.value)}>
          {months.map((item) => {
            const selected = (month === item.value) ? 'selected' : '';
            return (
              <option value={item.value} selected={selected}>{item.name}</option>
            );
          })}
        </select>
        <button type="submit">Lancer</button>
      </form>

      <h2>
        Solde du mois de {currentMonth} {year} :{' '}
        {!fetch.isLoading && fetch.data.pages[0].total.total_balance} €
      </h2>
      <Box sx={{ height: 600, width: '100%' }}>
        <DataGrid
          rows={!fetch.isLoading && fetch.data.pages[0].data}
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
