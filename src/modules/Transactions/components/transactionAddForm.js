/* eslint-disable arrow-body-style */
/* eslint-disable jsx-a11y/label-has-associated-control */

import { LinearProgress } from '@mui/material';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import useFetchCategories from '../../Categories/hooks/useFetchCategories';
import useFetchSubcategories from '../../Categories/hooks/useFetchSubcategory';
import InputForm from '../../common/components/form/input';
import useFetchVehicle from '../../Vehicule/hooks/useFetchVehicle';
import useFetchFuel from '../../Vehicule/hooks/useFetchFuel';
import useMutationCreateTransaction from '../hooks/useMutationCreateTransaction';

const TransactionAddForm = () => {
  const [category, setCategory] = useState(0);
  const [subcategory, setSubcategory] = useState();
  const [name, setName] = useState('');
  const [wording, setWording] = useState('');
  const [balance, setBalance] = useState('');

  //* si c'est un plein d'essence
  const [kmTravelled, setKmTravelled] = useState('');
  const [priceLiter, setPriceLiter] = useState('');
  const [tank, setTank] = useState('');
  const [fuel, setFuel] = useState();
  const [vehicle, setVehicle] = useState();

  //* on vient chercher les catégories et les sous catégories
  const { data: categoryData, isLoading: categoryIsLoading } = useFetchCategories('list');
  const { data: subcategoriesData, isLoading: subcategoriesIsLoading } = useFetchSubcategories('findByCategory', category);

  //* les véhicules et les carburants
  const { data: vehicleData, isLoading: vehicleIsLoading } = useFetchVehicle('list');
  const { data: fuelData, isLoading: fuelIsLoading } = useFetchFuel('list');

  let transaction = {};
  if (subcategory == 40) {
    transaction = {
      name,
      wording,
      balance: parseFloat(balance),
      subcategory,
      is_fixed: true,
      is_seen: true,
      is_active: true,
      tessence: {
        km_travelled: parseFloat(kmTravelled),
        price_liter: parseFloat(priceLiter),
        tank: parseFloat(tank),
        fuel: fuel,
        vehicle: vehicle,
      },
    };
  }
  else {
    transaction = {
      name,
      wording,
      balance: parseFloat(balance),
      subcategory,
      is_fixed: true,
      is_seen: true,
      is_active: true,
    };
  }

  const mutation = useMutationCreateTransaction(transaction);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(transaction);
    mutation.mutate();
  };

  return (
    <>
      <div className="container my-4">
        <Link to="/transactions" className="btn btn-success float-end">
          Retour
        </Link>
        <h2>Ajouter une transaction</h2>

        <form className="mt-5" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Nom
            </label>
            <InputForm
              type="text"
              className="form-control"
              id="name"
              placeholder="Nom de la transaction"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="wording" className="form-label">
              Libellé
            </label>
            <InputForm
              type="text"
              className="form-control"
              id="wording"
              placeholder="Libellé de la transaction"
              name="wording"
              value={wording}
              onChange={(e) => setWording(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="balance" className="form-label">
              Montant
            </label>
            <InputForm
              type="number"
              className="form-control"
              id="balance"
              placeholder="Montant de la transaction"
              name="balance"
              value={balance}
              onChange={(e) => setBalance(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="category" className="form-label">
              Catégorie {categoryIsLoading && <LinearProgress />}
            </label>
            <select
              className="form-select"
              name="category"
              id="category"
              onChange={(e) => {
                setCategory(e.target.value);
                setSubcategory(0);
              }}
              required
            >
              <option value="0">-- Catégorie --</option>
              {!categoryIsLoading
                && categoryData.map((item) => (
                  <option key={item.id} value={item.id}>
                    {item.id} - {item.name}
                  </option>
                ))}
            </select>
          </div>
          <div className="mb-3">
            <label htmlFor="subcategory" className="form-label">
              Sous catégorie {subcategoriesIsLoading && <LinearProgress />}
            </label>
            <select
              className="form-select"
              name="subcategory"
              id="subcategory"
              onChange={(e) => setSubcategory(e.target.value)}
              required
            >
              <option value="0">-- Sous catégorie --</option>
              {!subcategoriesIsLoading
                && subcategoriesData.map((item) => (
                  <option key={item.id} value={item.id}>
                    {item.id} - {item.name}
                  </option>
                ))}
            </select>
          </div>
          {subcategory == 40 && (
            <>
              <div className="mb-3">
                <InputForm
                  type="number"
                  className="form-control"
                  id="km_travelled"
                  placeholder="Kilomètres parcouru"
                  name="km_travelled"
                  value={kmTravelled}
                  onChange={(e) => setKmTravelled(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <InputForm
                  type="number"
                  className="form-control"
                  id="price_liter"
                  placeholder="Prix au litre"
                  name="price_liter"
                  value={priceLiter}
                  onChange={(e) => setPriceLiter(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <InputForm
                  type="number"
                  className="form-control"
                  id="tank"
                  placeholder="Litres ajoutés"
                  name="tank"
                  value={tank}
                  onChange={(e) => setTank(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="vehicle" className="form-label">
                  Véhicule {vehicleIsLoading && <LinearProgress />}
                </label>
                <select
                  className="form-select"
                  name="vehicle"
                  id="vehicle"
                  onChange={(e) => {
                    setVehicle(e.target.value);
                  }}
                  required
                >
                  <option value="0">-- Véhicule --</option>
                  {!vehicleIsLoading
                    && vehicleData.map((item) => (
                      <option key={item.id} value={item.id}>
                        {item.id} - {item.name}
                      </option>
                    ))}
                </select>
              </div>
              <div className="mb-3">
                <label htmlFor="vehicle" className="form-label">
                  Carburant {fuelIsLoading && <LinearProgress />}
                </label>
                <select
                  className="form-select"
                  name="fuel"
                  id="fuel"
                  onChange={(e) => {
                    setFuel(e.target.value);
                  }}
                  required
                >
                  <option value="0">-- Carburant --</option>
                  {!fuelIsLoading
                    && fuelData.map((item) => (
                      <option key={item.id} value={item.id}>
                        {item.id} - {item.name}
                      </option>
                    ))}
                </select>
              </div>
            </>
          )}
          {mutation.isLoading && <LinearProgress />}
          {mutation.isError && (
            <div className="alert alert-danger p-4" role="alert">
              {mutation.error.response.data.message.map((item) => (
                <li>{item}</li>
              ))}
            </div>
          )}
          {mutation.isSuccess && (
            <div className="alert alert-success" role="alert">
              La transaction a bien été créé
            </div>
          )}
          <div className="d-grid gap-2">
            <button type="submit" className="btn btn-primary mt-2">
              Valider
            </button>
          </div>
          <div className="d-grid gap-2">
            <button
              type="button"
              className="btn btn-warning mt-2"
              onClick={() => {
                setName('');
                setWording('');
                setBalance('');
                setCategory(0);
                setSubcategory();
                setKmTravelled('');
                setPriceLiter('');
                setTank('');
                setVehicle();
                setFuel();
              }}
            >
              Reset
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default TransactionAddForm;
