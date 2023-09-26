// Seed data
const data = {
  users: {
    1: {
      id: 1,
      email: "demo@user.com",
      username: "demouser",
      first_name: "Demo",
      last_name: "User"
    },
    2: {
      id: 2,
      email: "ned@user.com",
      username: "neduser",
      first_name: "Ned",
      last_name: "User"
    }
  },
  produdcts: {
    1: {
      id: 1,
      name: "Chair",
      description: "A chair",
      price: 100,
      image_url: "https://images.unsplash.com/photo-1581291518281-7d3bba777bf0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hhaXIlMjBwcm9kdWN0JTIwY2hhaXJ8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80",
      user_id: 1
    },
    2: {
      id: 2,
      name: "Table",
      description: "A table",
      price: 200,
      image_url: "https://images.unsplash.com/photo-1581291518281-7d3bba777bf0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hhaXIlMjBwcm9kdWN0JTIwY2hhaXJ8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80",
      user_id: 1
    },
    3: {
      id: 3,
      name: "Couch",
      description: "A couch",
      price: 300,
      image_url: "https://images.unsplash.com/photo-1581291518281-7d3bba777bf0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hhaXIlMjBwcm9kdWN0JTIwY2hhaXJ8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80",
      user_id: 2
    }
  }
}


const LOAD_DATA = 'data/LOAD_DATA';
const ADD_DATA = 'data/ADD_DATA';

// --------------Action Creators----------------
export const loadData = (data) => {
  return {
    type: LOAD_DATA,
    payload: data
  }
}

export const addData = (data) => {
  return {
    type: ADD_DATA,
    payload: data
  }
}
// --------------Thunk Creators----------------
// Load all data
export const thunkLoadData = () => {
  const response = data;

  const data = response.json();
}

// --------------Initial State----------------
const initialState = { data: null };

// --------------Reducer----------------
const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_DATA:
      return { data: action.payload };
    case ADD_DATA:
      return { data: action.payload };
    default:
      return state;
  }
}