import { createSlice } from '@reduxjs/toolkit';

interface AnchorProps {
  vertical: 'bottom' | 'top';
  horizontal: 'center' | 'left' | 'right';
}

interface OptionsProps {
  anchorOrigin: AnchorProps;
  autoHideDuration: number;
  message: string;
  variant: 'info' | 'error' | 'warning' | 'success' | undefined;
}

interface SnackbarSlice {
  state: boolean;
  options: OptionsProps;
}

const initialState: SnackbarSlice = {
  state: false,
  options: {
    anchorOrigin: {
      vertical: 'bottom',
      horizontal: 'right'
    },
    autoHideDuration: 6000,
    message: '',
    variant: undefined
  }
};

const snackbarSlice = createSlice({
  name: 'snackbar',
  initialState,
  reducers: {
    showMessage: (state, action) => {
      state.state = true;
      state.options = {
        ...initialState.options,
        ...action.payload
      };
    },
    hideMessage: (state, action) => {
      state.state = false;
    },
    showInfoMessage: (state, action) => {
      state.state = true;
      state.options = {
        ...initialState.options,
        message: action.payload,
        variant: 'info'
      };
    },
    showErrorMessage: (state, action) => {
      state.state = true;
      state.options = {
        ...initialState.options,
        message: action.payload,
        variant: 'error'
      };
    },
    showWarningMessage: (state, action) => {
      state.state = true;
      state.options = {
        ...initialState.options,
        message: action.payload,
        variant: 'warning'
      };
    },
    showSuccessMessage: (state, action) => {
      state.state = true;
      state.options = {
        ...initialState.options,
        message: action.payload,
        variant: 'success'
      };
    }
  }
});

export const {
  showMessage,
  hideMessage,
  showInfoMessage,
  showErrorMessage,
  showWarningMessage,
  showSuccessMessage
} = snackbarSlice.actions;

export default snackbarSlice.reducer;
