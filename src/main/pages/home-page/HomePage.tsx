import { Container, Typography } from '@mui/material';
import Footer from '../../../shared/components/footer/Footer.tsx';
import Header from '../../../shared/components/header/Header.tsx';
import SearchBar from '../../../shared/components/search-bar/SearchBar.tsx';
import './home-page.scss';

function HomePage() {

  return (
    <>
      <Header/>
      <main id='home-page'>
        <Container component='div' className='content-container' maxWidth='md'>
          <Typography variant='h1' color='primary' fontWeight='500'>FOAF Visualizer</Typography>
          <SearchBar/>
        </Container>
      </main>
      <Footer/>
    </>
  );
}

export default HomePage;
