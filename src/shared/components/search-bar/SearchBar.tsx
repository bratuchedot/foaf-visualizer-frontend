import { Search as SearchIcon } from '@mui/icons-material';
import { IconButton, InputBase, Paper, Tooltip } from '@mui/material';
import { ChangeEvent, KeyboardEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../../redux/hooks';
import { profileFetched } from '../../../redux/profile/profileSlice';
import FoafRepository from '../../../repository/FoafRepository';
import './search-bar.scss';

function SearchBar() {
  const [inputValue, setInputValue] = useState<string>('');
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setInputValue(event.target.value);
  };

  const handleSearch = (): void => {
    const trimmedInputValue: string = inputValue.trim();
    if (trimmedInputValue !== '') {
      fetchProfileInfo(trimmedInputValue);
      navigate('/profile')
    }
  };

  const handleEnterPress = (event: KeyboardEvent<HTMLInputElement>): void => {
    if (event.key === 'Enter') {
      event.preventDefault();
      handleSearch();
    }
  };

  const fetchProfileInfo = (foafUrl: string): void => {
    FoafRepository.getProfileInfo(foafUrl).then(res => {
      dispatch(profileFetched(res.data));
    }).catch(err => {
      console.log('error fetching profile info', err);
    });
  };

  return (
    <Tooltip title='Enter a valid FOAF turtle file URL' placement="bottom-start" disableHoverListener>
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
  );
}

export default SearchBar;
