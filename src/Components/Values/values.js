import { useState } from "react";

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

    return(
        <section>
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
        </section>
            
    )
};

export default Values;