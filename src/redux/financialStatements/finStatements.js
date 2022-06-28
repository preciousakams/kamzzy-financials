import axios from 'axios';

const baseUrl = 'https://financialmodelingprep.com/api/v3/available-traded/list?apikey=542903edab327097eef6752b9224f360';
const DISPLAY_STOCKS = 'DISPLAY_STOCKS';
const STOCK_DETAILS = 'STOCK_DETAILS';
const initialState = [];

export const displayStock = () => async (dispatch) => {
  const response = await axios.get(baseUrl);
  dispatch({
    type: DISPLAY_STOCKS,
    payload: response.data.slice(1, 50),
  });
};

export const stockDetails = (stock) => async (dispatch) => {
  dispatch({
    type: STOCK_DETAILS,
    payload: stock,
  });
};

const stockReducer = (state = initialState, action) => {
  switch (action.type) {
    case DISPLAY_STOCKS:
      return action.payload;
    // case DISPLAY_DETAILS:
    //   return action.payload;
    default:
      return state;
  }
};

export default stockReducer;
