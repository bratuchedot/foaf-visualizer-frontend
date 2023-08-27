import { CircularProgress } from '@mui/material';
import './loader.scss';

function Loader({ isLoading = false }: { isLoading: boolean }) {
  return (
    <>
      {isLoading &&
        <div className='loader'>
          <CircularProgress size={100}/>
        </div>}
    </>
  );
}

export default Loader;
