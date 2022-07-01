import { configureStore } from '@reduxjs/toolkit';
import { applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import stockReducer from './financialStatements/finStatements';

const composeEnhancers = compose;

const store = configureStore({
  reducer: {
    stocks: stockReducer,
  },
});
composeEnhancers(applyMiddleware(thunk));

export default store;
