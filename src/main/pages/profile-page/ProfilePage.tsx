import { Container, Grid } from '@mui/material';
import { useAppSelector } from '../../../redux/hooks.ts';
import Footer from '../../../shared/components/footer/Footer.tsx';
import Header from '../../../shared/components/header/Header.tsx';
import SearchBar from '../../../shared/components/search-bar/SearchBar.tsx';
import { Foaf } from '../../../shared/interfaces/Foaf.ts';
import CardSlider from '../../components/card-slider/CardSlider.tsx';
import ProfileCard from '../../components/profile-card/ProfileCard.tsx';
import './profile-page.scss';

function ProfilePage() {
  const profileData: Foaf | null = useAppSelector((state) => state.profile.profile);

  return (
    <>
      <Header/>
      <main>
        <Container>
          <Grid container spacing={4}>
            <Grid item xs={12}>
              <SearchBar/>
            </Grid>
            <Grid item xs={12}>
              <ProfileCard data={profileData}/>
            </Grid>
            <Grid item xs={12}>
              <CardSlider data={profileData?.peopleYouKnow}/>
            </Grid>
          </Grid>
        </Container>
      </main>
      <br/>
      <Footer/>
    </>
  );
}

export default ProfilePage;
