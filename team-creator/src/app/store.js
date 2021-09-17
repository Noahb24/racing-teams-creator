import { configureStore } from '@reduxjs/toolkit';
import teamMakerReducer from '../features/teamMaker/teamMakerSlice'

export const store = configureStore({
  reducer: {
    teamMaker: teamMakerReducer,
  },
});
