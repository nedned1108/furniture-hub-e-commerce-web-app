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
export const authenticate = () => async (dispatch) => {
  // send get request to the backend
  const response = await fetch("/api/auth/", {
    headers: {
      "Content-Type": "application/json",
    },
  });
  // if the response is ok, dispatch the action creator
  if (response.ok) {
    const data = await response.json();
    if (data.errors) {
      return;
    }

    dispatch(setUser(data));
  }
}
