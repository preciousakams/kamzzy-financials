import axios from 'axios';

const baseUrl = 'https://financialmodelingprep.com/api/v3/financial-statement-symbol-lists?apikey=542903edab327097eef6752b9224f360';
const DISPLAY_STATEMENT = 'DISPLAY_STATEMENT';

const initialState = [];

export const displayStatement = () => async (dispatch) => {
  const response = await axios.get(baseUrl);
  dispatch({
    type: DISPLAY_STATEMENT,
    payload: response.data.slice(58, 70),
  });
};

const statementReducer = (state = initialState, action) => {
  switch (action.type) {
    case DISPLAY_STATEMENT:
      return action.payload;
    default:
      return state;
  }
};

export default statementReducer;
