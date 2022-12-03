import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import About from './components/pages/About';
import Home from './components/pages/Home';
import TuristicAreas from './components/pages/TuristicAreas';
import Container from './components/layout/Container';

function App() {
  return (
    <Router>
      <Navbar />
      <Container customClass="min-height">
        <Routes>
          <Route exact path='/' element={<Home />}>
          </Route>
          <Route exact path='/pontos-turisticos' element={<TuristicAreas />}>
          </Route>
          <Route exact path='/sobre' element={<About />}>
          </Route>
        </Routes>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;
