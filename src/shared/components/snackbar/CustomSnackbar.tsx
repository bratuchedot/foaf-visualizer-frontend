import './custom-snackbar.scss';
import { Alert, Snackbar } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks.ts';
import { hideMessage } from '../../../redux/snackbar/snackbarSlice.ts';

function CustomSnackbar() {
  const dispatch = useAppDispatch();
  const state = useAppSelector((state) => state.snackbar.state);
  const options = useAppSelector((state) => state.snackbar.options);

  return (
    <Snackbar open={state} {...options}
              anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
              onClose={() => dispatch(hideMessage(false))}>
      <Alert severity={options.variant} onClose={() => dispatch(hideMessage(false))} >{options.message}</Alert>
    </Snackbar>
  );
}

export default CustomSnackbar;
