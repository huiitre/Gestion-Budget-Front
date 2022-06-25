/* eslint-disable arrow-body-style */

import { LinearProgress } from '@mui/material';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import useFetchCategories from '../../Categories/hooks/useFetchCategories';
import useFetchSubcategories from '../../Categories/hooks/useFetchSubcategory';
import InputForm from '../../common/components/form/input';
import Spinner from '../../common/components/spinner';

/* eslint-disable jsx-a11y/label-has-associated-control */
const TransactionAddForm = () => {
  const [category, setCategory] = useState(0);
  const [subcategory, setSubcategory] = useState(0);
  const [Name, setName] = useState('');
  const [wording, setWording] = useState('');
  const [balance, setBalance] = useState();

  const { data: categoryData, isLoading: categoryIsLoading } = useFetchCategories('list');
  const { data: subcategoriesData, isLoading: subcategoriesIsLoading } = useFetchSubcategories('findByCategory', category);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('hereee');
  };

  return (
    <>
      {categoryIsLoading ? (
        <Spinner />
      ) : (
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
                Catégorie
              </label>
              <select
                className="form-select"
                name="category"
                id="category"
                onChange={(e) => {
                  setCategory(e.target.value);
                  setSubcategory(null);
                }}
                required
              >
                <option value="0">-- Catégorie --</option>
                {categoryData.map((item) => (
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
                {!subcategoriesIsLoading && subcategoriesData.map((item) => (
                  <option key={item.id} value={item.id}>
                    {item.id} - {item.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="d-grid gap-2">
              <button type="submit" className="btn btn-primary mt-5">
                Valider
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default TransactionAddForm;
