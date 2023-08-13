import { IconButton, InputBase, Paper } from '@mui/material';
import { Search as SearchIcon } from '@mui/icons-material';
import './search-bar.scss';

function SearchBar() {

  return (
    <Paper
      component='form'
      className='search-bar-container'
    >
      <InputBase
        className='search-input'
        placeholder='Search...'
      />
      <IconButton type='button' className='search-button'>
        <SearchIcon/>
      </IconButton>
    </Paper>
  );
}

export default SearchBar;
