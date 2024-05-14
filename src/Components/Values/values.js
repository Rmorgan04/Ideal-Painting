import { useState, useEffect } from "react";

const values = [
  {
    title: 'Passion',
    icon: <span className="material-symbols-outlined red">favorite</span>,
    description: 'We\'re a team of passionate Northeastern Oklahoma painters dedicated to transforming your vision into a reality that reflects both perfection and your unique style.'
  },
  {
    title: 'Integrity',
    icon: <span className="material-symbols-outlined">handshake</span>,
    description: 'We use only the highest quality materials and employ meticulous techniques to ensure a flawless finish that lasts.'
  },
  {
    title: 'Communication',
    icon: <span className="material-symbols-outlined teal">diversity_3</span>,
    description: 'We listen closely to your needs and keep you informed throughout the entire project, from initial consultation to final brushstroke.'
  }
]

function Values () {

  const [currentIndex, setCurrentIndex] = useState(0);
  const [screenSize, setScreenSize] = useState({width: window.innerWidth})

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % values.length);
  };

  const handlePrev = () => {
    if (currentIndex === 0) {
      setCurrentIndex(values.length - 1); // Set to last index
    } else {
      setCurrentIndex((prevIndex) => (prevIndex - 1) % values.length);
    }
  }

  useEffect(() => {
    const handleResize = () => {
      setScreenSize({width: window.innerWidth})
    }

    window.addEventListener('resize', handleResize);

  return () => {
    window.removeEventListener('resize', handleResize);
  }

  }, []);
  
  
  
  if (screenSize.width > 1200) {
    return (
      <section>
      <div className="values-header">
            <h2 className="white">Values that Make Us the Ideal Choice</h2>
          </div>           
    <div className="values-grid">  
      {values.map((value, index) => {
        return <div key={index}>
          <div>{value.icon}</div>
          <h3>{value.title}</h3>
          <p className="charcoal center">{value.description}</p>
        </div>
      })}
    </div>
    </section>

      
    );
  } else {
    return(
      <div>
          <div className="values-header">
            <h2 className="white">Values that Make Us the Ideal Choice</h2>
          </div>            
          <div className='values-carousel'>
            <div className='values-container'>
              <div className="value fade">
                <div className="value-title">
                  <div>{values[currentIndex].icon}</div>
                  <h3>{values[currentIndex].title}</h3>
                </div>                  
                <p>{values[currentIndex].description}</p>
              </div>
              <span className="previous" onClick={handlePrev}>&#10094;</span>
              <span className='next' onClick={handleNext}>&#10095;</span>
            </div>
          </div>
      </div>
          
  )
  }
    
};

export default Values;