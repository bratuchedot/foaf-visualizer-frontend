import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import AboutPage from './main/pages/about-page/AboutPage.tsx';
import HomePage from './main/pages/home-page/HomePage.tsx';
import ProfilePage from './main/pages/profile-page/ProfilePage.tsx';
import CustomSnackbar from './shared/components/snackbar/CustomSnackbar.tsx';
import './shared/styles/main.scss';

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
            <Route path='*' element={<Navigate to='/' replace/>}/>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/visualize' element={<ProfilePage/>}/>
            <Route path='/about' element={<AboutPage/>}/>
          </Routes>
        </BrowserRouter>
        <CustomSnackbar/>
      </ThemeProvider>
    </>
  );
}

export default App;
