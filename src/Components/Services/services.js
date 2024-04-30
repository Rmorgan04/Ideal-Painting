import { NavLink } from "react-router-dom";


function Services() {
    return (
        <section>
            <div className="services">
                <h3>Transform Your Space with Passionate Precision</h3>
                <h4>Looking to breathe new life into your home?</h4>
                <p>Ideal Painting offers comprehensive interior and exterior painting services fueled by a passion for creating beautiful, functional spaces.</p>
                <div className="interior">
                    <img src="https://i.imgur.com/C8iH2k2.jpg" alt="a painted wall"/>  
                </div>
                <p> We believe in approaching every project with integrity, using only the highest quality materials and employing meticulous techniques. Clear communication is paramount throughout the process, ensuring your vision becomes a reality.</p>
                <div className="exterior">
                    <img src="https://i.imgur.com/FmlCqYh.jpg" alt="a painted wall"/>  
                </div>
                <NavLink to='/services'><button className="services-button">Services</button></NavLink>
            </div>
        </section>
    );
};

export default Services;