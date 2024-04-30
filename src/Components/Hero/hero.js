import Estimate from "../Estimate/estimate";

function Hero() {
    return (
        <section>
            <div className='hero-background'>
              <div className='hero-img'>
                <div className='darkened'>
                  <h1 className="white">Ideal Painting</h1>
                  <h2 className="white">Let Us Breathe New Life into Your Home</h2>
                </div>
                <div>
                  <Estimate />
                </div>
              </div>
            </div>
        </section>
    );
};

export default Hero;