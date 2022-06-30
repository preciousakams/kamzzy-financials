import axios from 'axios';

const baseUrl = 'https://api.binance.com/api/v3/ticker/24hr';
const DISPLAY_STOCKS = 'DISPLAY_STOCKS';
const STOCK_DETAILS = 'STOCK_DETAILS';

const initialState = [];

export const displayStock = () => async (dispatch) => {
  const response = await axios.get(baseUrl);
  dispatch({
    type: DISPLAY_STOCKS,
    payload: response.data.slice(0, 52),
  });
};

export const stockDetails = (stock) => async (dispatch) => {
  try {
    dispatch({
      type: STOCK_DETAILS,
      payload: stock,
    });
  } catch (err) {
    return err;
  }
  return null;
};

const stockReducer = (state = initialState, action) => {
  switch (action.type) {
    case DISPLAY_STOCKS:
      return action.payload;
    case STOCK_DETAILS:
      return action.payload;
    default:
      return state;
  }
};

export default stockReducer;
