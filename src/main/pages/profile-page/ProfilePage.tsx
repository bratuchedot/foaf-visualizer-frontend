import { Container, Stack } from '@mui/material';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { updateFoafDetails, updateFoafUrl } from '../../../redux/foaf/foafSlice.ts';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks.ts';
import { showErrorMessage } from '../../../redux/snackbar/snackbarSlice.ts';
import FoafRepository from '../../../repository/FoafRepository.ts';
import Footer from '../../../shared/components/footer/Footer.tsx';
import Header from '../../../shared/components/header/Header.tsx';
import Loader from '../../../shared/components/loader/Loader.tsx';
import SearchBar from '../../../shared/components/search-bar/SearchBar.tsx';
import { FoafDetails } from '../../../shared/interfaces/FoafDetails.ts';
import CardSlider from '../../components/card-slider/CardSlider.tsx';
import ProfileCard from '../../components/profile-card/ProfileCard.tsx';
import './profile-page.scss';

function ProfilePage() {
  const profileData: FoafDetails | null = useAppSelector((state) => state.foaf.details);
  const [loading, setLoading] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const foafUrl = queryParams.get('foafUrl');

  useEffect(() => {
    if (!profileData && !foafUrl) {
      navigate('/');
    }
  }, []);

  useEffect(() => {
    if (!profileData && foafUrl) {
      setLoading(true);
      FoafRepository.getProfileInfo(foafUrl).then(res => {
        dispatch(updateFoafDetails(res.data));
        dispatch(updateFoafUrl(foafUrl));
      }).catch(err => {
        dispatch(showErrorMessage(err.response.data.message));
      }).finally(() => {
        setLoading(false);
      });
    }
  }, [foafUrl]);

  return (
    <>
      <Header/>
      <Container component='main' id='profile-page'>
        <Stack direction='column' spacing={4}>
          <SearchBar/>
          {profileData && <ProfileCard data={profileData}/>}
          {profileData?.knows && <CardSlider data={profileData?.knows}/>}
        </Stack>
      </Container>
      <Footer/>
      <Loader isLoading={loading}/>
    </>
  );
}

export default ProfilePage;
