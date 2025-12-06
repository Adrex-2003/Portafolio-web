
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
      <Contact></Contact>
      <Hero></Hero>
      <AboutMe></AboutMe>
      <Proyectos></Proyectos>
      <Footer></Footer>
      
    </ThemeProvider>
  );
}

export default App;
