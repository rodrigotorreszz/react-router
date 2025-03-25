import Carrusel from './components/carrucel.jsx';
import NavBar from './components/navbar.jsx';
import Nav from './components/Nav.jsx';
import Page from './components/Page.jsx';
import Placeholders from './components/Placeholders.jsx';

function App() {
    return (
      <div>
        <Carrusel />
        <hr></hr>
        <NavBar />
        <hr></hr>
        <Nav />
        <hr></hr>
        <Page />
        <hr></hr>
        <Placeholders />
        </div>
  );
}

export default App;