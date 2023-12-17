import { Divider, Typography } from '@mui/material';
import './footer.scss';

function Footer() {
  return (
    <footer id='footer'>
      <Divider/>
      <Typography variant='body2' className='footer-text'>Crafted with ❤️ by Emilijan Koteski, last update December 2023</Typography>
    </footer>
  );
}

export default Footer;
