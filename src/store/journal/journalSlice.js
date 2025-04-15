import { createSlice } from '@reduxjs/toolkit';

export const journalSlice = createSlice({
  name: 'journal',
  initialState: {
    isSaving: false,
    savedMessage: '',
    notes: [],
    active: null,
  },
  reducers: {
    savingNewNote: (state) => {
      state.isSaving = true;
    },
    addNewEmptyNote: (state, action) => {
      state.notes.push(action.payload);
      state.isSaving = false;
    },
    setActiveNote: (state, action) => {
      state.active = action.payload;
      state.savedMessage = '';
    },
    setNotes: (state, action) => {
      state.notes = action.payload;
    },
    setSaving: (state, action) => {
      state.isSaving = true;
      state.savedMessage = '';
    },
    updateNote: (state, action) => {
      state.isSaving = false;
      state.notes = state.notes.map((note) => {
        if (note.id === action.payload.id) {
          return action.payload;
        }
        return note;
      });
      state.savedMessage = `${action.payload.title}, is correctly updated`;
    },
    deleteNodeById: (state, action) => {},
  },
});

// Action creators are generated for each case reducer function
export const {
  addNewEmptyNote,
  deleteNodeById,
  savingNewNote,
  setActiveNote,
  setNotes,
  setSaving,
  updateNote,
} = journalSlice.actions;
