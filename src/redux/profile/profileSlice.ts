import { createSlice } from '@reduxjs/toolkit';
import { Foaf } from '../../shared/interfaces/Foaf.ts';

interface ProfileSlice {
  profile: Foaf | null;
}

const initialState: ProfileSlice = {
  profile: null
};

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    profileFetched: (state, action) => {
      state.profile = action.payload;
    }
  }
});

export const { profileFetched } = profileSlice.actions;
export default profileSlice.reducer;
