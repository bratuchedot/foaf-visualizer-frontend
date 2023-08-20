import { useAppSelector } from '../../../redux/hooks.ts';
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
    </>
  );
}

export default ProfilePage;
