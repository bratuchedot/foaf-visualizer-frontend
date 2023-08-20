import { Avatar, Box, Button, Grid, Link, Paper, Stack, Typography } from '@mui/material';
import { Foaf } from '../../../shared/interfaces/Foaf.ts';
import './profile-card.scss';

function ProfileCard({ data }: { data: Foaf | null }) {

  const getEmailAddress = (email: string | undefined) => {
    if (!email) return;
    const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (email.match(emailRegex)) {
      return email;
    }
    return '';
  };

  const getPhoneNumber = (phoneNumber: string | undefined) => {
    if (!phoneNumber) return;
    return phoneNumber.replace('tel:', '');
  };

  return (
    <>
      <br/>
      <Paper className='container'>
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <Stack
              direction='column'
              justifyContent='center'
              alignItems='center'
              spacing={2}
            >
              <Avatar className='profile-picture' alt={data?.name} src={data?.pictureUrl}/>
              <Typography variant='h5'>{data?.name}</Typography>
              <Button>{data?.peopleYouKnow.length} friends</Button>
            </Stack>
          </Grid>
          <Grid item xs={12} md={8}>
            <Stack
              direction='column'
              justifyContent='center'
              spacing={2}
            >
              <Box>
                <Typography variant='h4'>Personal</Typography>
                <Grid container spacing={2}>
                  <Grid item xs={5}>
                    {data?.title && <Typography noWrap>Title (Mr, Mrs, Dr, etc):</Typography>}
                    {data?.firstName && <Typography noWrap>First Name:</Typography>}
                    {data?.lastName && <Typography noWrap>Last Name (Family/Given):</Typography>}
                    {data?.nickname && <Typography noWrap>Nickname:</Typography>}
                    {getEmailAddress(data?.email) && <Typography noWrap>Your Email Address:</Typography>}
                    {data?.homepage && <Typography noWrap>Homepage:</Typography>}
                    {data?.pictureUrl && <Typography noWrap>Your Picture:</Typography>}
                    {data?.phoneNumber && <Typography noWrap>Phone Number:</Typography>}
                  </Grid>
                  <Grid item xs={7}>
                    <Typography noWrap>{data?.title}</Typography>
                    <Typography noWrap>{data?.firstName}</Typography>
                    <Typography noWrap>{data?.lastName}</Typography>
                    <Typography noWrap>{data?.nickname}</Typography>
                    <Typography noWrap>{getEmailAddress(data?.email)}</Typography>
                    <Typography noWrap><Link href={data?.homepage}
                                             underline='hover'>{data?.homepage}</Link></Typography>
                    <Typography noWrap><Link href={data?.pictureUrl}
                                             underline='hover'>{data?.pictureUrl}</Link></Typography>
                    <Typography noWrap>{getPhoneNumber(data?.phoneNumber)}</Typography>
                  </Grid>
                </Grid>
              </Box>
              <Box>
                <Typography variant='h4'>Work</Typography>
                <Grid container spacing={2}>
                  <Grid item xs={5}>
                    {data?.workHomepage && <Typography noWrap>Work Homepage:</Typography>}
                    {data?.workDescription && <Typography noWrap>Page describing what you do at work:</Typography>}
                  </Grid>
                  <Grid item xs={7}>
                    <Typography noWrap><Link href={data?.workHomepage}
                                             underline='hover'>{data?.workHomepage}</Link></Typography>
                    <Typography noWrap><Link href={data?.workDescription}
                                             underline='hover'>{data?.workDescription}</Link></Typography>
                  </Grid>
                </Grid>
              </Box>
              <Box>
                <Typography variant='h4'>School</Typography>
                <Grid container spacing={2}>
                  <Grid item xs={5}>
                    {data?.schoolHomepage && <Typography noWrap>School Homepage:</Typography>}
                  </Grid>
                  <Grid item xs={7}>
                    <Typography noWrap><Link href={data?.schoolHomepage}
                                             underline='hover'>{data?.schoolHomepage}</Link></Typography>
                  </Grid>
                </Grid>
              </Box>
            </Stack>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
}

export default ProfileCard;
