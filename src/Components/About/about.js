import { NavLink } from "react-router-dom";

function About() {
    return (
        <>       
        <div className="bg-white">
            <h2>Northeastern Oklahoma's Trusted Choice for Quality Painting</h2>
            <p>Welcome to Ideal Painting! We're a family-owned and operated professional painting company proudly serving Northeastern Oklahoma for over 15 years. Our team of skilled and dedicated painters shares a deep passion for transforming spaces and exceeding client expectations.</p>
        </div>
        <div className='bg-teal'>
            <h3>Integrity is at the core of everything we do. </h3>
            <div className="about-info">
                <p>We use only the highest quality paints and materials, ensuring long-lasting results. We take pride in our meticulous attention to detail and maintain open communication throughout the entire project, keeping you informed every step of the way.</p>
                <img className="about-img" src="https://i.imgur.com/bkezh5L.jpg" alt="paint brush and can" />
            </div>            
        </div>
        <div>
            <h2>Our Commitment to Excellence</h2>
            <ul className="grid-2">
                <li className="list-item"><h3>Award-Winning Quality</h3><p className="charcoal">We've been recognized for our outstanding work, having received awards such as the "Oklahoma Painting Excellence"</p></li>
                <li className="list-item"><h3>Experienced Team</h3><p className="charcoal">Our diverse team boasts over 15 years of combined experience, bringing a wealth of knowledge and expertise to every project.</p></li>
                <li className="list-item"><h3>Clear Communication</h3><p className="charcoal">We believe in open and honest communication. We'll listen to your vision, answer your questions promptly, and keep you updated on the progress.</p></li>
                <li className="list-item"><h3>Passion for Painting</h3><p className="charcoal">We're passionate about what we do, and it shows in the quality of our work. We take pride in breathing new life into your space, whether it's your home or business.</p></li>
            </ul>
        </div>
        <div className="bg-coal about-info">
            <img src="https://i.imgur.com/Tu3R3bG.jpg" alt="a paintbrush" />
            <p>Ideal Painting is more than just a painting company; we're your trusted partner in creating beautiful and functional spaces.  We offer a wide range of interior and exterior painting services to meet your unique needs.</p>            
        </div>
        <div className="about-footer">
            <h2>Ready to transform your space? Contact us today for a free consultation!</h2>
            <NavLink to='/contact'><button className="contact-button">Contact Us</button></NavLink>
            <h3>We look forward to working with you!</h3>
        </div>
        </>
    );
};

export default About;