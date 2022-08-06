/* eslint-disable jsx-a11y/control-has-associated-label */
// == Import
import { useCallback } from 'react';
import useFetchTransactions from '../../Transactions/hooks/useFetchTransactions';
import { getMonthNameFromDate } from '../../common/utils/getMonthNameFromDate';
import getYearIntegetFromDate from '../../common/utils/getYearIntegerFromDate';
import Spinner from '../../common/components/spinner';
import TransactionShortItem from '../../Transactions/components/transactionShortItem';

// == Composant
const Home = () => {
  const currentMonth = getMonthNameFromDate();
  const currentYear = getYearIntegetFromDate();

  const {
    data, isLoading, fetchNextPage, hasNextPage,
  } = useFetchTransactions('limit');

  const handleFetchNextPage = useCallback(
    (e) => {
      e.preventDefault();
      fetchNextPage();
    },
    [fetchNextPage],
  );

  // !isLoading && console.log('data : ', data);
  return (
    <>
      {!isLoading ? (
        <div className="app">
          <div className="container my-4">
            <p className="display-4">Bienvenue dans mon backOffice</p>

            <div className="row mt-5 d-flex justify-content-center">
              <div className="col-12 col-md-6">
                <div className="card text-white mb-3">
                  <div className="card-header d-flex justify-content-between bg-primary">
                    <span>
                      Solde du mois de {currentMonth} {currentYear}
                    </span>
                    <span>
                      {!isLoading && data.pages[0].total.total_balance}
                    </span>
                  </div>
                  <div className="card-body">
                    <table className="table table-hover">
                      <thead>
                        <tr>
                          <th scope="col">#</th>
                          <th scope="col">Nom</th>
                          <th scope="col">Montant</th>
                          <th scope="col">Date de création</th>
                          <th scope="col" />
                        </tr>
                      </thead>
                      <tbody>
                        {/* {data.pages[0].data.map((item) => (
                          <TransactionShortItem {...item} key={item.t_id} />
                        ))} */}
                        {data.pages.map((group, i) => group.data.map((item) => (
                          <TransactionShortItem {...item} key={item.t_id} />
                        )))}
                      </tbody>
                    </table>
                    {hasNextPage && (
                      <div className="d-grid gap-2">
                        <a
                          href=""
                          className="btn btn-success"
                          onClick={handleFetchNextPage}
                        >
                          Voir plus
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Spinner />
      )}
    </>
  );
};

// == Export
export default Home;
