import { createSlice } from '@reduxjs/toolkit';

export const journalSlice = createSlice({
  name: 'journal',
  initialState: {
    isSaving: true,
    savedMessage: '',
    notes: [],
    active: null,
    // active: {
    //   id: 'ABC123',
    //   titile: '',
    //   body: '',
    //   date: 123456,
    //   imageUrls: [],
    // },
  },
  reducers: {
    addNewEmptyNote: (state, action) => {},
    setActiveNote: (state, action) => {},
    setNotes: (state, action) => {},
    setSaving: (state, action) => {},
    updateNote: (state, action) => {},
    deleteNodeById: (state, action) => {},
  },
});

// Action creators are generated for each case reducer function
export const {
  incrementaddNewEmptyNote,
  setActiveNote,
  setNotes,
  setSaving,
  updateNote,
  deleteNodeById,
} = journalSlice.actions;
