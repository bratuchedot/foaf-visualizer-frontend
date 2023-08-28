import { Avatar, Button, Card, CardContent, Typography } from '@mui/material';
import { useAppDispatch } from '../../../redux/hooks.ts';
import { profileFetched } from '../../../redux/profile/profileSlice.ts';
import { showErrorMessage } from '../../../redux/snackbar/snackbarSlice.ts';
import FoafRepository from '../../../repository/FoafRepository.ts';
import { Friend } from '../../../shared/interfaces/Friend.ts';
import './slide-card.scss';

function SlideCard({ data }: { data: Friend | undefined }) {
  const dispatch = useAppDispatch();

  const getFirstLetter = (name: string | undefined): string => {
    if (!name) return '';
    const nameParts = name.trim().split(/\s+/);
    const actualName = nameParts.length > 2 ? nameParts.slice(1).join(' ') : name;
    return actualName.charAt(0).toUpperCase();
  };

  const handleClick = () => {
    if (!data?.seeAlso) return;
    FoafRepository.getProfileInfo(data?.seeAlso).then(res => {
      dispatch(profileFetched(res.data));
    }).catch(() => {
      dispatch(showErrorMessage('Cannot view this profile'));
    });
  };

  return (
    <Card className='card'>
      <CardContent className='card-content'>
        <div className='card-image'>
          <Avatar src='' alt={data?.name} className='card-avatar'>{getFirstLetter(data?.name)}</Avatar>
        </div>
        <div className='card-description'>
          <Typography variant='h5'><strong>{data?.name}</strong></Typography>
        </div>
        <div className='card-action'>
          <Button variant='contained' onClick={handleClick} disabled={!data?.seeAlso}>View profile</Button>
        </div>
      </CardContent>
    </Card>
  );
}

export default SlideCard;
