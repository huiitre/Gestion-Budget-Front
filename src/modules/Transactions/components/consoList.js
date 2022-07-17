import { Box } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import useFetchFuelTransaction from '../hooks/useFetchFuelTransaction';

const ConsoList = () => {
  const { data, isLoading } = useFetchFuelTransaction('fuelList');

  const columns = [
    { field: 't_id', headerName: 'ID', width: 50 },
    {
      field: 't_name',
      headerName: 'Nom',
      width: 200,
    },
    {
      field: 't_balance',
      headerName: 'Montant',
      type: 'number',
      width: 100,
    },
    {
      field: 't_created_at',
      headerName: 'Créé le ',
      type: 'date',
      width: 175,
    },
    {
      field: 'v_name',
      headerName: 'Véhicule',
      width: 150,
    },
    {
      field: 'conso',
      headerName: 'Consommation',
      type: 'number',
      width: 100,
    },
    {
      field: 't_e_km_travelled',
      headerName: 'KM parcouru',
      type: 'number',
      width: 100,
    },
    {
      field: 'f_name',
      headerName: 'Carburant',
      width: 100,
    },
    {
      field: 't_e_price_liter',
      headerName: 'Prix au litre',
      type: 'number',
      width: 100,
    },
    {
      field: 't_e_tank',
      headerName: 'NB litres',
      type: 'number',
      width: 100,
    },
  ];

  return (
    <div className="container my-4">
      <p className="display-6">Module Gestion véhicule et essence</p>
      <Box sx={{ height: 600, width: '100%' }}>
        <DataGrid
          rows={!isLoading && data}
          columns={columns}
          getRowId={(row) => row.t_id}
          checkboxSelection
        />
      </Box>
    </div>
  );
};

export default ConsoList;
