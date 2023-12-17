import { Backdrop, CircularProgress } from '@mui/material';

function Loader({ isLoading = false }: { isLoading: boolean }) {
  return (
    isLoading &&
    <Backdrop sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }} open={isLoading}>
      <CircularProgress size={100}/>
    </Backdrop>
  );
}

export default Loader;
