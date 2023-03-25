import { Box, CssBaseline } from '@mui/material';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { routes as appRoutes } from './routes';

function App() {
  return (
    <div>
      <CssBaseline/>
      <Box
        height='100vh'
        display='flex'
        flexDirection='column'
      >
        <Router>
          <Routes>
            {appRoutes.map((route) => (
              <Route
                key={route.key}
                path={route.path}
                element={<route.component/>}
              />
            ))}
          </Routes>
        </Router>
      </Box>
    </div>
  );
}

export default App;
