import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: {
    email: '',
    displayName: '',
    password: '',
    birthdate: '',
    education: '',
    hobbies: '',
    family: 0,
    gender: '',
    phone: '',
    id: '',
    confirmPassword: '',
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
    setAnswer5: (state, action) => {
      state.user.education = action.payload;
    },
    setAnswer6: (state, action) => {
      state.user.family = action.payload;
    },
    setAnswer7: (state, action) => {
      state.user.gender = action.payload;
    },
    setAnswer8: (state, action) => {
      state.user.phone = action.payload;
    },
    setAnswer9: (state, action) => {
      state.user.id = action.payload;
    },
    setAnswer10: (state, action) => {
      state.user.hobbies = action.payload;
    },
  },
});

export const {
  setAnswer1,
  setAnswer2,
  setAnswer3,
  setAnswer4,
  setAnswer5,
  setAnswer6,
  setAnswer7,
  setAnswer8,
  setAnswer9,
  setAnswer10,
} = userSlice.actions;

export const userObj = (state) => state.user.answers;

export default userSlice.reducer;
