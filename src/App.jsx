import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import AboutUs from './pages/about-us';
import Container from './components/Container';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ProductDetail from './pages/productDetail';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Container>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/products/:id" element={<ProductDetail />}></Route>
          </Routes>
        </Container>
        <Footer />
      </Router>
    </>
  )
}

export default App
