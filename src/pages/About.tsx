import React, { ReactElement, FC } from 'react';
import { Box, Paper, Typography } from '@mui/material';

const About: FC<any> = (): ReactElement => {
  return (
    <Box sx={{
      flexGrow: 1,
      backgroundColor: 'whitesmoke',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <Paper
        elevation={3}
        sx={{
          padding: '1rem',
          backgroundColor: 'primary.light'
        }}
      >
        <Typography color='primary.dark' variant='h3'>
          About
        </Typography>
      </Paper>
    </Box>
  );
};

export default About;
