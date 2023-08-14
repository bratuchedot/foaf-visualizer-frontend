import { useAppSelector } from '../../../redux/hooks.ts';
import SearchBar from '../../../shared/components/search-bar/SearchBar.tsx';
import { Foaf } from '../../../shared/interfaces/Foaf.ts';

function ProfilePage() {
  const profile: Foaf | null = useAppSelector((state) => state.profile.profile);

  return (
    <>
      <h1>Profile Page</h1>
      <SearchBar/>
      {profile}
    </>
  );
}

export default ProfilePage;
