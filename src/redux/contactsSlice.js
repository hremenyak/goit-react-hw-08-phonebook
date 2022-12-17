import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-hot-toast';
import { fetchContacts, addContact, deleteContact } from './operations';

const initialState = {
  contacts: {
    items: [],
    isLoading: false,
    error: null,
  },
};

const handlePending = state => {
  state.contacts.isLoading = true;
};
const handleRejected = (state, action) => {
  state.contacts.isLoading = false;
  state.contacts.error = action.payload;
  toast.error(`Seems like an error occured. Try again later, please.`);
};
const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, handlePending)

      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.contacts.items = action.payload;
        state.contacts.isLoading = false;
        state.error = null;
      })
      .addCase(fetchContacts.rejected, handleRejected)
      .addCase(addContact.pending, handlePending)

      .addCase(addContact.fulfilled, (state, action) => {
        state.contacts.isLoading = false;
        state.error = null;
        state.contacts.items.push(action.payload);
        toast.success(
          `${action.payload.name} was successfully added to your contacts.`
        );
      })
      .addCase(addContact.rejected, handleRejected)
      .addCase(deleteContact.pending, handlePending)

      .addCase(deleteContact.fulfilled, (state, action) => {
        state.contacts.isLoading = false;
        state.error = null;
        const index = state.contacts.items.findIndex(
          contact => contact.id === action.payload.id
        );
        state.contacts.items.splice(index, 1);
        toast.success(`${action.payload.name} was deleted from your contacts.`);
      })
      .addCase(deleteContact.rejected, handleRejected);
  },
});

export const contactsReducer = contactsSlice.reducer;
