// constants
const SET_USER = "session/SET_USER";
const REMOVE_USER = "session/REMOVE_USER";

export const setUser = (user) => ({
  type: SET_USER,
  payload: user,
});

export const removeUser = () => ({
  type: REMOVE_USER,
});

const initialState = { user: null };

export const login = (user) => async (dispatch) => {
  dispatch(setUser(user));
};

// Reducer
const sessionReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return { ...state, user: action.payload };
    case REMOVE_USER:
      return { ...state, user: null };
    default:
      return state;
  }
}

export default sessionReducer;
