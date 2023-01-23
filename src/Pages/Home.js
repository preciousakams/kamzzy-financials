import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { displayStock, stockDetails } from '../redux/financialStatements/finStatements';

const Home = () => {
  const stocks = useSelector((state) => state.stocks);
  const [searchInput, setSearchInput] = useState('');
  const [filteredResults, setFilteredResults] = useState([]);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(displayStock());
  }, []);

  const stockClicked = (stock) => {
    dispatch(stockDetails(stock));
  };

  const searchItems = (searchValue) => {
    setSearchInput(searchValue);
    if (searchInput !== '') {
      const filteredStock = stocks.filter((item) => Object.values(item).join('').toUpperCase().includes(searchInput.toUpperCase()));
      setFilteredResults(filteredStock);
    } else {
      setFilteredResults(stocks);
    }
  };

  return (
    <>
      <div className="search">
        <input type="text" onChange={(e) => searchItems(e.target.value)} placeholder="Search currency pair" />
      </div>
      <div className="headerDiv"><h3>Cryptocurrency Trading Data</h3></div>
      <div className="row justify-content-center">
        {searchInput.length > 1 ? filteredResults.map((item) => (
          <div className="col-sm-4 colDiv" key={item.symbol}>
            <button
              type="button"
              onClick={() => {
                stockClicked(item);
                navigate('/details');
              }}
            >
              {item.symbol}

            </button>
          </div>
        )) : stocks.map((stock) => (
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
