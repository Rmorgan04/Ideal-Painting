import { useState, useEffect } from "react";

const testimonial = [
    {
        name: 'John and Mary Smith - Homeowners',
        review: 'Ideal Painting did a fantastic job painting the exterior of our house. They were incredibly meticulous and took the time to ensure every detail was perfect. The new paint job has not only made our house look brand new, but it\'s also increased its curb appeal significantly. We\'re so grateful for their amazing work!'
    },
    {
        name: 'Sarah Jones, Marketing Manager - ABC Company',
        review: 'We hired Ideal Painting to refresh the interior of our office and were blown away by the results. The team was professional, efficient, and delivered a flawless finish that has completely transformed the space. We couldn\'t be happier and highly recommend Ideal Painting to anyone looking for top-notch painting services.'
    },
    {
        name: 'Emily Thompson, Homeowner',
        review: 'Ideal Painting brought my vision for a modern and inviting living space to life. They were patient with my indecisiveness when choosing colors and provided valuable recommendations. The quality of their work is exceptional, and the finished product is even better than I imagined. I highly recommend Ideal Painting to anyone looking for a professional and trustworthy painting company.'
    },
]

function Testimonials() {

    const [currentIndex, setCurrentIndex] = useState(0);

    const rotateNext = () => {
        if (currentIndex === testimonial.length - 1) {
            return setCurrentIndex(0);
        }
        return setCurrentIndex(currentIndex + 1);
    }

    useEffect(() => {
       const interval = setInterval(() => {
        rotateNext()
       }, 5000)
       
       return() => clearInterval(interval)
    });

    return (
        <section>
            <div className="testimonials">
                <h2>Testimonials</h2>
                <div>
                    <p className="charcoal">&quot;{testimonial[currentIndex].review}&quot;</p>
                    <p className="charcoal">{testimonial[currentIndex].name}</p>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;