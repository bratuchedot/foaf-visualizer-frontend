import { Grid, Typography, Link } from '@mui/material';
import { ProfileDataEntryProps } from './ProfileDataEntryProps.ts';

function ProfileDataEntry({ option, value, link }: ProfileDataEntryProps) {

  const renderValue = () => {
    if (Array.isArray(value)) {
      return (
        value.map((item, index) => (link
          ? <Typography key={index} variant='body1' noWrap><Link href={item} underline='hover' target='_blank' rel='noopener'>{item}</Link></Typography>
          : <Typography key={index} variant='body1'>{item}</Typography>)));
    } else {
      return (link
        ? <Typography variant='body1' noWrap><Link href={value} underline='hover' target='_blank' rel='noopener'>{value}</Link></Typography>
        : <Typography variant='body1'>{value}</Typography>);
    }
  };

  return (
    <Grid item container xs={12}>
      <Grid item xs={12} sm={4}>
        <Typography variant='body1'>{option}:</Typography>
      </Grid>
      <Grid item xs={12} sm={8}>
        {renderValue()}
      </Grid>
    </Grid>
  );
}

export default ProfileDataEntry;
