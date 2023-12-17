import { createSlice } from '@reduxjs/toolkit';
import { FoafDetails } from '../../shared/interfaces/FoafDetails.ts';

interface FoafSlice {
  url: string | null;
  details: FoafDetails | null;
}

const initialState: FoafSlice = {
  url: null,
  details: null
};

const foafSlice = createSlice({
  name: 'details',
  initialState,
  reducers: {
    updateFoafUrl: (state, action) => {
      state.url = action.payload;
    },
    updateFoafDetails: (state, action) => {
      state.details = action.payload;
    }
  }
});

export const { updateFoafUrl, updateFoafDetails } = foafSlice.actions;
export default foafSlice.reducer;
