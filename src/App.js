
import Navigation from './Components/Navigation/navigation';
import Values from './Components/Values/values';
import './App.css';

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
              <h1 className='darkened'> Ideal Painting</h1>
              <div>
              
              </div>
            </div>
          </div>
          </section>
          <section className='about-section'>
            <Values />           
          </section>
          <section className='services-section'>
            <h3>Services</h3>
          </section>
          <section className='contact-section'>
            <h3>Contact Us</h3>
          </section>
      </main>
      <footer>

      </footer>
    </div>
  );
}

export default App;
