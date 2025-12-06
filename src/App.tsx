import { ThemeProvider } from '@emotion/react';
import './App.css'
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import theme from './theme';

function App() {

  return (
    <ThemeProvider theme={theme}>
      <div>
        <Header title="Portafolio Alex" />
        <Hero
          nombre="Alex Méndez"
          rol="Desarrollador Frontend"
          mensaje="Construyo experiencias digitales modernas, rápidas y con un diseño profesional."
          foto="src/assets/images/logo.png"
        />
      </div>
    </ThemeProvider>
  );
}

export default App
