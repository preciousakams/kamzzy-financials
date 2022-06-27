import { configureStore } from '@reduxjs/toolkit';
import { applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import statementReducer from './financialStatements/finStatements';

const composeEnhancers = compose;

const store = configureStore({
  reducer: {
    statements: statementReducer,
  },
});
composeEnhancers(applyMiddleware(thunk));

export default store;
