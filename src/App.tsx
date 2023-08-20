import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './main/pages/home-page/HomePage.tsx';
import ProfilePage from './main/pages/profile-page/ProfilePage.tsx';

const theme = createTheme({
  palette: {
    background: {
      default: 'rgb(240, 242, 245)'
    }
  }
});

function App() {

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/profile' element={<ProfilePage/>}/>
          </Routes></BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
