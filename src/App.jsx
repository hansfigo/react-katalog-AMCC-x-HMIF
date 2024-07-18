import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import AboutUs from './pages/about-us';
import Container from './components/Container';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Router>
        <Container>
          <Navbar />
          <section className='flex flex-1 min-h-full'>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about-us" element={<AboutUs />} />
            </Routes>
          </section>
          <Footer />
        </Container>
      </Router>
    </>
  )
}

export default App
