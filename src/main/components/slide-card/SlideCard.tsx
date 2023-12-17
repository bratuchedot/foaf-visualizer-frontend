import { Avatar, Button, Card, CardContent, Typography } from '@mui/material';
import { useState } from 'react';
import { useAppDispatch } from '../../../redux/hooks.ts';
import { updateFoafDetails, updateFoafUrl } from '../../../redux/foaf/foafSlice.ts';
import { showErrorMessage } from '../../../redux/snackbar/snackbarSlice.ts';
import FoafRepository from '../../../repository/FoafRepository.ts';
import Loader from '../../../shared/components/loader/Loader.tsx';
import { KnowsDetails } from '../../../shared/interfaces/KnowsDetails.ts';
import { getFirstLetterOfName } from '../../../shared/utils/getters.ts';
import './slide-card.scss';

function SlideCard({ data }: { data: KnowsDetails | undefined }) {
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState<boolean>(false);

  const handleClick = () => {
    if (!data?.seeAlso) return;
    setLoading(true);
    FoafRepository.getProfileInfo(data.seeAlso).then(res => {
      dispatch(updateFoafDetails(res.data));
      updateUrl(data.seeAlso);
    }).catch(() => {
      dispatch(showErrorMessage('Oops! Cannot view this FOAF profile'));
    }).finally(() => {
      setLoading(false);
    });
  };

  const updateUrl = (urlParam: string) => {
    dispatch(updateFoafUrl(urlParam));
    const queryParams = new URLSearchParams(window.location.search);
    queryParams.set('foafUrl', urlParam);
    window.history.replaceState({}, '', `${window.location.pathname}?${queryParams.toString()}`);
  };

  return (
    <>
      <Card className='card'>
        <CardContent className='card-content'>
          <div className='card-image'>
            <Avatar src='' alt={data?.name} className='card-avatar'>{getFirstLetterOfName(data?.name || '')}</Avatar>
          </div>
          <div className='card-description'>
            <Typography variant='h5'><strong>{data?.name}</strong></Typography>
          </div>
          <div className='card-action'>
            <Button variant='contained' onClick={handleClick} disabled={!data?.seeAlso}>View profile</Button>
          </div>
        </CardContent>
      </Card>
      <Loader isLoading={loading}/>
    </>
  );
}

export default SlideCard;
