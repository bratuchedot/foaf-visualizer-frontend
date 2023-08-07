import { createTheme, CssBaseline, ThemeProvider, Typography } from '@mui/material';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const theme = createTheme();

function App() {

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <Typography variant='h1'>Hello World!</Typography>
      </ThemeProvider>
    </>
  );
}

export default App;
