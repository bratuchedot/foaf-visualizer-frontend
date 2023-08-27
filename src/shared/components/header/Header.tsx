import { AppBar, Button, Toolbar } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import './header.scss';

function Header() {
  const navigate = useNavigate();

  const handleAboutClick = () => {
    navigate('/about');
  };

  return (
    <header>
      <AppBar position='static' color='transparent' elevation={0}>
        <Toolbar className='toolbar'>
          <Button variant='text' color='inherit' onClick={handleAboutClick}>About</Button>
        </Toolbar>
      </AppBar>
    </header>
  );
}

export default Header;
