import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  contacts: [],
  filter: '',
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: {
      reducer(state, action) {
        // here we can use PREPARE TOO (NAME, NUMBER) etc
      },
    },
    deleteContact(state, action) {
      //
    },
    findContact(state, action) {
      //
    },
  },
});

export const { addContact, deleteContact, findContact } = contactsSlice.actions;
export const contactReducer = contactsSlice.reducer;
