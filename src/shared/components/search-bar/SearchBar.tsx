import { Search as SearchIcon } from '@mui/icons-material';
import { IconButton, InputBase, Paper, Tooltip } from '@mui/material';
import { ChangeEvent, KeyboardEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../../redux/hooks';
import { updateFoafDetails, updateFoafUrl } from '../../../redux/foaf/foafSlice.ts';
import { showErrorMessage } from '../../../redux/snackbar/snackbarSlice.ts';
import FoafRepository from '../../../repository/FoafRepository';
import './search-bar.scss';
import Loader from '../loader/Loader.tsx';

function SearchBar() {
  const [inputValue, setInputValue] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setInputValue(event.target.value);
  };

  const handleSearch = (): void => {
    const trimmedInputValue: string = inputValue.trim();
    if (trimmedInputValue !== '') {
      fetchProfileInfo(trimmedInputValue);
    }
  };

  const handleEnterPress = (event: KeyboardEvent<HTMLInputElement>): void => {
    if (event.key === 'Enter') {
      event.preventDefault();
      handleSearch();
    }
  };

  const fetchProfileInfo = (foafUrl: string): void => {
    setLoading(true);
    FoafRepository.getProfileInfo(foafUrl).then(res => {
      dispatch(updateFoafDetails(res.data));
      dispatch(updateFoafUrl(foafUrl));
      navigate(`/visualize?foafUrl=${foafUrl}`);
    }).catch(err => {
      dispatch(showErrorMessage(err.response.data.message));
    }).finally(() => {
      setLoading(false);
    });
  };

  return (
    <section>
      <Tooltip title='Enter URL of FOAF file in Turtle format (.ttl)' placement="bottom-start" disableHoverListener>
        <Paper component='form' className='search-bar-container'>
          <InputBase
            className='search-input'
            placeholder='Search...'
            value={inputValue}
            onChange={handleInputChange}
            onKeyDown={handleEnterPress}
          />
          <IconButton type='button' className='search-button' onClick={handleSearch}>
            <SearchIcon/>
          </IconButton>
        </Paper>
      </Tooltip>
      <Loader isLoading={loading}/>
    </section>
  );
}

export default SearchBar;
