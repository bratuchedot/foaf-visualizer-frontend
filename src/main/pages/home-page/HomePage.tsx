import { Container, Typography } from '@mui/material';
import Footer from '../../../shared/components/footer/Footer.tsx';
import Header from '../../../shared/components/header/Header.tsx';
import SearchBar from '../../../shared/components/search-bar/SearchBar.tsx';
import './home-page.scss';

function HomePage() {

  return (
    <>
      <Header/>
      <main className='main-container'>
        <Container className='content-container' maxWidth='md'>
          <Typography variant='h1' color='primary' className='foaf'>FOAF Visualizer</Typography>
          <SearchBar/>
        </Container>
      </main>
      <Footer/>
    </>
  );
}

export default HomePage;
