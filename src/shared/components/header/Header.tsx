import { AppBar, Button, IconButton, Toolbar } from '@mui/material';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import { useNavigate } from 'react-router-dom';
import './header.scss';

function Header() {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate('/');
  };

  const handleAboutClick = () => {
    navigate('/about');
  };

  return (
    <header id='header'>
      <AppBar position='static' color='transparent' elevation={0}>
        <Toolbar className='toolbar'>
          <IconButton onClick={handleHomeClick}>
            <HomeRoundedIcon/>
          </IconButton>
          <Button variant='text' color='inherit' onClick={handleAboutClick}>About</Button>
        </Toolbar>
      </AppBar>
    </header>
  );
}

export default Header;
