import logo from './logo.svg';
import './App.css';
import { Routes,Route } from 'react-router-dom';
import Home from './components/Home/home';
import About from './components/About/about';
import { Navbar } from 'react-bootstrap';
import NavbarHeader from './components/Navbar/navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import LandingPage from './components/LandingPage/landingpage';
function App() {
  return (
    <>
    <NavbarHeader/>
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/' element={<Home/>} />
        {/* <Route path='/' element={<LandingPage />} /> */}
    </Routes>
    </>
  );
}

export default App;
