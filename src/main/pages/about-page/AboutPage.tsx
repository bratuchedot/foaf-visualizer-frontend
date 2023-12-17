import { Button, Container, Link, Paper, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Footer from '../../../shared/components/footer/Footer.tsx';
import Header from '../../../shared/components/header/Header.tsx';
import KeyboardReturnRoundedIcon from '@mui/icons-material/KeyboardReturnRounded';
import './about-page.scss';

function AboutPage() {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1);
  };

  return (
    <>
      <Header/>
      <Container component='main' id='about-page' maxWidth='md'>
        <Button variant='contained' color='inherit' className='back-button' onClick={handleBackClick} startIcon={<KeyboardReturnRoundedIcon/>}>Back</Button>
        <Paper className='about-container'>
          <Typography variant='h3'>About</Typography>
          <Typography variant='body1' className='text'>
            FOAF Visualizer is a tool for navigating the intricate web of connections within FOAF ontology data. FOAF,
            or Friend-of-a-Friend, captures relationships between people and their friends in a machine-readable format.
            While computers grasp it easily, FOAF Visualizer makes it visually captivating and insightful for humans,
            simplifying the exploration of these connections.
          </Typography>
          <Typography variant='h4' className='heading'>Understanding FOAF</Typography>
          <Typography variant='body1' className='text'>
            FOAF, standing for "friend of a friend", is a machine-readable ontology that describes individuals, their
            pursuits, and their associations with others and objects. It allows individuals to express details about
            themselves in a structured manner. What sets FOAF apart is its ability to facilitate the description of
            social networks without relying on a centralized database. This decentralized approach enables software to
            process these descriptions, unlocking opportunities for automated search engines to reveal information about
            you and the communities to which you belong. In essence, FOAF empowers you to define and share your digital
            persona within the vast landscape of interconnected relationships.
          </Typography>
          <Typography variant='body1' className='text'>
            Describe yourself <Link href='http://ldodds.com/foaf/foaf-a-matic.html' underline='hover' target='_blank'
                                    rel='noopener'>here</Link>.
          </Typography>
          <Typography variant='h4' className='heading'>Overview</Typography>
          <Typography variant='body1' className='text'>
            When you visit FOAF Visualizer, a straightforward landing page awaits. A prominent search bar sits in the
            center, ready for the URL of a FOAF file in Turtle (.ttl) syntax. Submit a valid URL, and the backend
            analyzes the data.
          </Typography>
          <Typography variant='body1' className='text'>
            Upon processing, you're redirected to a dynamic profile page. Here, the FOAF data is displayed in a Profile
            Card, providing a quick overview. Below, an Infinite Slider showcases the names of the individual's friends,
            each with a "View profile" button. Clicking these buttons leads to an exploration of connections,
            dynamically fetching data and revealing relationships with each click. FOAF Visualizer is not just a tool;
            it's an accessible experience, guiding you through a web of connections one click at a time.
          </Typography>
          <Typography variant='h4' className='heading'>Origin</Typography>
          <Typography variant='body1' className='text'>
            Developed for educational purposes, FOAF Visualizer is a project assignment for the "Web-Based Systems"
            course at the Faculty of Computer Science and Engineering (FCSE) in Skopje. Created in August 2023 by
            Emilijan Koteski.
          </Typography>
        </Paper>
      </Container>
      <Footer/>
    </>
  );
}

export default AboutPage;
