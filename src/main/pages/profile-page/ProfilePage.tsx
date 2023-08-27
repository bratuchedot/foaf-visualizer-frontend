import { Container } from '@mui/material';
import { useAppSelector } from '../../../redux/hooks.ts';
import CardSlider from '../../components/card-slider/CardSlider.tsx';
import SearchBar from '../../../shared/components/search-bar/SearchBar.tsx';
import { Foaf } from '../../../shared/interfaces/Foaf.ts';
import ProfileCard from '../../components/profile-card/ProfileCard.tsx';

function ProfilePage() {
  const profileData: Foaf | null = useAppSelector((state) => state.profile.profile);

  return (
    <>
      <h1>Profile Page</h1>
      <SearchBar/>
      <ProfileCard data={profileData}/>
      <br/>
      <Container>
        <CardSlider data={profileData?.peopleYouKnow}/>
      </Container>
    </>
  );
}

export default ProfilePage;
