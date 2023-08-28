import './footer.scss';
import { Divider, Typography } from '@mui/material';

function Footer() {
  return (
    <footer>
      <Divider/>
      <Typography variant='body2' className='footer-text'>Crafted with ❤️ by Emilijan Koteski, August 2023</Typography>
    </footer>
  );
}

export default Footer;
