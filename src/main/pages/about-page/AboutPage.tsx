import { Button, Container, Paper, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Footer from '../../../shared/components/footer/Footer.tsx';
import Header from '../../../shared/components/header/Header.tsx';
import './about-page.scss';

function AboutPage() {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('..');
  };

  return (
    <>
      <Header/>
      <main>
        <Container maxWidth='md'>
          <Button variant='contained' color='inherit' className='back-button' onClick={handleBackClick}>Back</Button>
          <Paper className='about-container'>
            <Typography variant='h3'>About FOAF Visualizer</Typography>
            <Typography variant='body1' className='text'>
              FOAF Visualizer is a tool for navigating the intricate web of connections hidden
              within FOAF ontology data. FOAF (Friend-of-a-Friend) data is a powerful representation of relationships
              between people and their friends in a machine-readable format. While computers understand it well, FOAF
              Visualizer bridges the gap for humans, offering a visually captivating and insightful exploration of these
              relationships.
            </Typography>
            <Typography variant='h4' className='heading'>What is FOAF?</Typography>
            <Typography variant='body1' className='text'>
              FOAF (an acronym of friend of a friend) is a machine-readable ontology describing persons, their
              activities and their relations to other people and objects. Anyone can use FOAF to describe themselves.
              FOAF allows groups of people to describe social networks without the need for a centralised database. This
              allows software to process these descriptions, perhaps as part of an automated search engine, to discover
              information about you and the communities of which you're a member.
            </Typography>
            <Typography variant='h4' className='heading'>How does FOAF Visualizer work?</Typography>
            <Typography variant='body1' className='text'>
              When you arrive at FOAF Visualizer, you'll be greeted by simple landing page with a prominent search bar
              sits at the center, awaiting for URL of a FOAF file written in
              Turtle (TTL) syntax. Submit a valid URL and the backend will analyze the data.
            </Typography>
            <Typography variant='body1' className='text'>
              Once the data is processed, you're seamlessly redirected to a
              dynamic profile page. Here, the FOAF data comes to life in a beautifully designed Profile Card, showcasing
              the details of the individual. But that's just the beginning.
            </Typography>
            <Typography variant='body1' className='text'>
              Beneath the Profile Card, a mesmerizing Slider takes center stage. This infinite slider showcases the
              names of the individual's friends (recognized through the FOAF "knows" tag). Four cards per view elegantly
              glide across the screen, each bearing the friend's name and a "View profile" button. Curiosity piqued,
              users can click these buttons, embarking on a captivating journey of exploration.
            </Typography>
            <Typography variant='h4' className='heading'>Navigating the infinite web of connections</Typography>
            <Typography variant='body1' className='text'>
              FOAF Visualizer is more than just a tool; it's an experience. As you delve deeper into an individual's
              friends, you're led down a rabbit hole of connections. With every "View profile" click, the app
              dynamically fetches the data for the selected friend and their network, effortlessly reloading the page.
              This creates an endless loop of discovery, akin to traversing a graph of relationships, one connection at
              a time.
            </Typography>
            <Typography variant='h4' className='heading'>Created for learning and exploration</Typography>
            <Typography variant='body1' className='text'>
              FOAF Visualizer was created as a project assignment for the "Web-Based Systems" course at the Faculty of
              Computer Science and Engineering (FCSE) in Skopje.
            </Typography>
          </Paper>

        </Container>
      </main>
      <br/>
      <Footer/>
    </>
  );
}

export default AboutPage;
