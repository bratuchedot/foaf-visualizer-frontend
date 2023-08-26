import { Avatar, Button, Card, CardContent, Typography } from '@mui/material';
import './slide-card.scss';

function SlideCard() {
  return (
    <Card className='card'>
      <CardContent className='card-content'>
        <div className='card-image'>
          <Avatar src='https://randomuser.me/api/portraits/men/9.jpg' alt='' className='card-avatar'/>
        </div>
        <div className='card-description'>
          <Typography variant='h5'><strong>Name Surname</strong></Typography>
        </div>
        <div className='card-action'>
          <Button variant='contained'>Click me!</Button>
        </div>
      </CardContent>
    </Card>
  );
}

export default SlideCard;
