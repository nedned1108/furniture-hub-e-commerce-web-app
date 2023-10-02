// constants
const LOAD_RECEIPT = "receipt/LOAD_RECEIPT";
const ADD_TO_RECEIPT = "receipt/ADD_TO_RECEIPT";

// action creators
const loadReceipt = () => ({
  type: LOAD_RECEIPT,
});

const addToReceipt = (receipt) => ({
  type: ADD_TO_RECEIPT,
  payload: receipt,
});


// thunks
export const loadReceiptThunk = () => async (dispatch) => {
  dispatch(loadReceipt());
}

export const addToReceiptThunk = (receipt) => async (dispatch) => {
  dispatch(addToReceipt(receipt));
}

// reducer
const initialState = { receipts: [] };

const receiptReducer = (state = initialState, action) => {
  let newState = { ...state };
  switch (action.type) {
    case LOAD_RECEIPT:
      return newState;
    case ADD_TO_RECEIPT:
      newState = { ...state };
      newState.receipts.push(action.payload);
      return newState;
    default:
      return state;
  }
}

export default receiptReducer;
