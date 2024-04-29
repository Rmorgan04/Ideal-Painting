import Estimate from "../Estimate/estimate";
import Values from "../Values/values";
import Services from "../Services/services";
import Testimonials from "../Testimonials/testimonials";
import Contact from "../Contact/contact";

function Main() {
    return (
        <>
        <main className='main-section'>
          <section>
            <div className='hero-background'>
              <div className='hero-img'>
                <div className='darkened'>
                  <h1>Ideal Painting</h1>
                  <h2>Let Us Breathe New Life into Your Home</h2>
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
    </>
    );
};

export default Main;