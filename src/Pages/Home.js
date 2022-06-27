import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { displayStatement } from '../redux/financialStatements/finStatements';

const Home = () => {
  const statements = useSelector((state) => state.statements);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(displayStatement());
  }, []);

  return (
    <>
      <div><h3>All Financial Statements</h3></div>
      <div className="row justify-content-center">
        {statements.map((statement, index) => (
        // eslint-disable-next-line react/no-array-index-key
          <div className="col-sm-4 colDiv" key={index}>
            <button type="button">{statement}</button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;
