import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { displayStock, stockDetails } from '../redux/financialStatements/finStatements';

const Home = () => {
  const stocks = useSelector((state) => state.stocks);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(displayStock());
  }, []);

  const stockClicked = (stock) => {
    dispatch(stockDetails(stock));
  };

  return (
    <>
      <div><h3>Cryptocurrency Trading Data</h3></div>
      <div className="row justify-content-center">
        {stocks.map((stock) => (
          <div className="col-sm-4 colDiv" key={stock.symbol}>
            <button
              type="button"
              onClick={() => {
                stockClicked(stock);
                navigate('/details');
              }}
            >
              {stock.symbol}

            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;
