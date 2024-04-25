
import Navigation from './Components/Navigation/navigation';
import Estimate from './Components/Estimate/estimate';
import Values from './Components/Values/values';
import Services from './Components/Services/services';
import Contact from './Components/Contact/contact';
import './App.css';
import Testimonials from './Components/Testimonials/testimonials';
import Footer from './Components/Footer/footer';

function App() {
  return (
    <div className="page-wrapper">
      <header className="page-header">
        <div className='logo'>

        </div>
        <Navigation />
      </header>
      <main className='main-section'>
        <section>
          <div className='hero-background'>
            <div className='hero-img'>
              <div className='darkened'>
                <h1>Ideal Painting</h1>
                <h2>Let Us Breath New Life into Your Home</h2>
              </div>
              <div>
                <Estimate />
              </div>
            </div>
          </div>
          </section>
          <section className='about-section'>
            <Values />           
          </section>
          <section className='services-section'>
            <Services />
          </section>
          <section>
            <Testimonials />
          </section>
          <section className='contact-section'>
            <Contact />
          </section>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
