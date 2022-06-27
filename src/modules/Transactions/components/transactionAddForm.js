/* eslint-disable arrow-body-style */

import { LinearProgress } from '@mui/material';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import useFetchCategories from '../../Categories/hooks/useFetchCategories';
import useFetchSubcategories from '../../Categories/hooks/useFetchSubcategory';
import InputForm from '../../common/components/form/input';
import useMutationCreateTransaction from '../hooks/useMutationCreateTransaction';

/* eslint-disable jsx-a11y/label-has-associated-control */
const TransactionAddForm = () => {
  const [category, setCategory] = useState(0);
  const [subcategory, setSubcategory] = useState(0);
  const [Name, setName] = useState('');
  const [wording, setWording] = useState('');
  const [balance, setBalance] = useState(0);

  const { data: categoryData, isLoading: categoryIsLoading } = useFetchCategories('list');
  const { data: subcategoriesData, isLoading: subcategoriesIsLoading } = useFetchSubcategories('findByCategory', category);

  const transaction = {
    name: Name,
    wording,
    balance: parseFloat(balance),
    subcategory,
    is_fixed: true,
    is_seen: true,
    is_active: true,
  };
  const mutation = useMutationCreateTransaction(transaction);

  const handleSubmit = (e) => {
    e.preventDefault();
    mutation.mutate(transaction);
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
              value={Name}
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
        </form>
      </div>
    </>
  );
};

export default TransactionAddForm;
