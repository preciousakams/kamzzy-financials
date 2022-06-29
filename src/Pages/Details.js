import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { MdOutlineArrowBackIosNew } from 'react-icons/md';
import { NavLink } from 'react-router-dom';
import { stockDetails } from '../redux/financialStatements/finStatements';

const Details = () => {
  const stocks = useSelector((state) => state.stocks);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(stockDetails());
  }, []);

  return (
    <div className="detailsDiv">
      <NavLink to="/"><MdOutlineArrowBackIosNew /></NavLink>
      <div className="detailHeader" key={stocks.symbol}>
        <h1>{stocks.symbol}</h1>
        <h4>
          Price Change:
          {' '}
          {stocks.priceChangePercent}
          %
        </h4>
      </div>
      <div className="detailsList">
        <h5>
          Volume:
          {' '}
          {stocks.volume}
          <span>
            Quote Volume:
            {' '}
            {stocks.quoteVolume}
          </span>
        </h5>
        <h5>
          Last Price:
          {' '}
          {stocks.lastPrice}
          <span>
            {' '}
            Last Qty:
            {stocks.lastQty}

          </span>
        </h5>
        <h5>
          Bid Price:
          {' '}
          {stocks.bidPrice}
          <span>
            Bid Qty:
            {' '}
            {stocks.bidQty}
          </span>
        </h5>
        <h5>
          AskPrice:
          {' '}
          {stocks.askPrice}
          <span>
            Ask Qty:
            {' '}
            {stocks.askQty}
          </span>
        </h5>
        <h5 className="price">
          <span>
            {' '}
            Opening Price:
            {' '}
            {stocks.openPrice}
          </span>
          <span>
            {' '}
            High Price:
            {' '}
            {stocks.highPrice}
          </span>
          <span>
            {' '}
            Low Price:
            {' '}
            {stocks.lowPrice}
          </span>
        </h5>
      </div>
    </div>
  );
};

export default Details;
