
import { ThemeProvider } from '@emotion/react';
import './App.css';
import Proyectos from './components/Projects/Projects';
import theme from './theme';
import Header from './components/Header/Header';
import AboutMe from './components/AboutMe/AboutMe';
import Hero from './components/Hero/Hero';

function App() {

  return (
    <ThemeProvider theme={theme}>
      <Header></Header>
      <Hero nombre={''} rol={''} mensaje={''} foto={''}></Hero>
      <Proyectos></Proyectos>
      <AboutMe nombre='Adrex' bio={''} foto={''} experiencia={''} enfoque={''} tecnologias={''}></AboutMe>
    </ThemeProvider>
  );
}

export default App;
