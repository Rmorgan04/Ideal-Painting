import Main from './Components/Main/main';
import Navigation from './Components/Navigation/navigation';
import Footer from './Components/Footer/footer';
import About from './Components/About/about';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import ServiceDetails from './Components/ServiceDetails/serviceDetails';
import ContactUs from './Components/Contact-us/contactUs';

function App() {
  return (
    <div className="page-wrapper">
      <header className="page-header">
        <Navigation />
      </header>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/services' element={<ServiceDetails />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<ContactUs />} />
      </Routes>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
