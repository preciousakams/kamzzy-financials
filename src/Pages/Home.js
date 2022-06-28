import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { displayStock, stockDetails } from '../redux/financialStatements/finStatements';

const Home = () => {
  const stocks = useSelector((state) => state.stocks);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(displayStock());
  }, []);

  const stockClicked = (stock) => {
    dispatch(stockDetails(stock));
  };

  return (
    <>
      <div><h3>All Tradeable Stocks</h3></div>
      <div className="row justify-content-center">
        {stocks.map((stock) => (
          <div className="col-sm-4 colDiv" key={stock.symbol}>
            <button type="button" onClick={() => stockClicked(stock)}>{stock.name}</button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;
