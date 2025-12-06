
import { ThemeProvider } from '@emotion/react';
import './App.css';
import Proyectos from './components/Projects/Projects';
import theme from './theme';
import Header from './components/Header/Header';
import AboutMe from './components/AboutMe/AboutMe';
import Hero from './components/Hero/Hero';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  
  return (
    <ThemeProvider theme={theme}>
      <Header></Header>
      <Hero></Hero>
      <hr />
      <AboutMe></AboutMe>
      <hr />
      <Proyectos></Proyectos>
      <hr />
      <Contact></Contact>
      <hr />
      <Footer></Footer>
      
    </ThemeProvider>
  );
}

export default App;
