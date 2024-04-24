import { useState } from "react";

const values = [
  {
    title: 'Passion',
    description: 'We\'re a team of passionate Northeastern Oklahoma painters dedicated to transforming your vision into a reality that reflects both perfection and your unique style.'
  },
  {
    title: 'Integrity',
    description: 'We use only the highest quality materials and employ meticulous techniques to ensure a flawless finish that lasts.'
  },
  {
    title: 'Communication',
    description: 'We listen closely to your needs and keep you informed throughout the entire project, from initial consultation to final brushstroke.'
  }
]

function Values () {

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % values.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1) % values.length);
  }

    return(
        <div>
            <h2>Our Ideal Values</h2>
            <div className='values-carousel'>
              <div className='values-container'>
                <div className="value fade">
                  <h3>{values[currentIndex].title}</h3>
                  <p>{values[currentIndex].description}</p>
                </div>
                <span className="previous" onClick={handlePrev}>&#10094;</span>
                <span className='next' onClick={handleNext}>&#10095;</span>
              </div>
            </div>
        </div>
            
    )
};

export default Values;