/* eslint-disable jsx-a11y/heading-has-content */
import './App.css';
import { Testimonio } from './componentes/Testimonio.js';

function App() {
  return (
    <div className='App'>
      <div className='contenedor-principal'>
        <h1>Mira que cara de tonto se me ha quedado en esta foto chavales!</h1>
        <Testimonio 
          nombre='Juan Marcos García'
          pais='España'
          imagen='mia'
          cargo='Web developer'
          empresa='Amazon'
          testimonio='Aprendí a programar React desde cero con FreeCodeCamp completamente gratis y me ayudó bastante a desarrollarme como profesional'
        />
         <Testimonio 
          nombre='Emma Bostan'
          pais='Francia'
          imagen='marcos'
          cargo='Software Engenier'
          empresa='Spotify'
          testimonio='Gratis y muy profesionales, desde cero y de gran ayuda en mi carrera'
        />
         <Testimonio 
          nombre='Ana Fernández'
          pais='Italia'
          imagen='perro'
          cargo='Google Analitics'
          empresa='Google'
          testimonio='La mejor eleccion que he realizado en mi vida es empezar a estidiar cursos gratuitos de FreeCodeCamp'
        />
      </div>
    </div>
  );
}

export default App;
