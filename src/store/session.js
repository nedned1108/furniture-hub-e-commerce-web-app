// Seed Data
const sessionUser = {
  id: 1,
  email: "demo@user.com",
  username: "demouser",

};


// constants
const SET_USER = "session/SET_USER";
const REMOVE_USER = "session/REMOVE_USER";

const setUser = (user) => ({
  type: SET_USER,
  payload: user,
});

const removeUser = () => ({
  type: REMOVE_USER,
});



const initialState = { user: null };

// Thunks
export const login = (data) => async (dispatch) => {
    dispatch(setUser(data));
}

export const logout = () => async (dispatch) => {
    dispatch(removeUser());
}

// Reducer
const sessionReducer = (state = initialState, action) => {
  let newState = { ...state };
  switch (action.type) {
    case SET_USER:
      newState.user = action.payload;
      return newState;
    case REMOVE_USER:
      newState.user = null;
      return newState;
    default:
      return state;
  }
}

export default sessionReducer;
