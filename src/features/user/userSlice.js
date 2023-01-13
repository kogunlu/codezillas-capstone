import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: {
    email: '',
    displayName: '',
    password: '',
    birthdate: '',
    education: '',
    hobbies: [],
    family: 0,
    gender: '',
  },
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setAnswer1: (state, action) => {
      state.user.email = action.payload;
    },
    setAnswer2: (state, action) => {
      state.user.displayName = action.payload;
    },
    setAnswer3: (state, action) => {
      state.user.password = action.payload;
    },
    setAnswer4: (state, action) => {
      state.user.birthdate = action.payload;
    },
  },
});

export const { setAnswer1, setAnswer2, setAnswer3, setAnswer4 } =
  userSlice.actions;

export const userObj = (state) => state.user.answers;

export default userSlice.reducer;
