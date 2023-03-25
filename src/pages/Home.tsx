import React, { ReactElement, FC } from 'react';
import { Box, Paper, Typography } from '@mui/material';

const Home: FC<any> = (): ReactElement => {
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
        <Typography color='primary.dark' variant='h1'>
          FOAF Visualizer
        </Typography>
      </Paper>
    </Box>
  );
};

export default Home;
