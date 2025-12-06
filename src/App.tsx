import './App.css'
import Header from './components/Header/Header';

function App() {

  return (
    <div>
      <Header title="Portafolio Alex" />
      
      <section id="hero" style={{ height: '100vh', backgroundColor: '#f0f0f0' }}>
        <h1>Hero Section</h1>
      </section>

      <section id="sobre-mi" style={{ height: '100vh', backgroundColor: '#d0d0d0' }}>
        <h1>Sobre Mí</h1>
      </section>

      <section id="proyectos" style={{ height: '100vh', backgroundColor: '#b0b0b0' }}>
        <h1>Proyectos</h1>
      </section>

      <section id="contacto" style={{ height: '100vh', backgroundColor: '#909090' }}>
        <h1>Contacto</h1>
      </section>
    </div>
  );
}

export default App
