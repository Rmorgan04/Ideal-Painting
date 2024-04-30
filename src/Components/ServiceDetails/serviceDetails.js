

function ServiceDetails() {
    return(
        <>
            <section>
                <div className="bg-coal services-intro">
                    <h2 className="white">Interior & Exterior Painting Services</h2>
                    <h3 className="white">Looking to transform your space?</h3>
                    <p>Ideal Painting offers comprehensive interior and exterior painting services fueled by a passion for creating beautiful, functional spaces. We believe in approaching every project with integrity, using only the highest quality materials and employing meticulous techniques. Clear communication is paramount throughout the process, ensuring your vision becomes a reality.</p>
                </div>
            </section>
            <section>
                <div>
                    <h2>Our Interior Painting Expertise:</h2>
                    <div className="detail-container">
                        <ul className="grid">
                            <li className="list-item"><h3>Wall and Ceiling Painting: </h3><p className="charcoal center">Refresh your entire living space with a flawless finish, tailored to your color preferences.</p></li>
                            <li className="list-item"><h3>Trim and Molding Detailing:  </h3><p className="charcoal center">We meticulously accentuate architectural features with precise brushwork, adding a touch of elegance.</p></li>
                            <li className="list-item"><h3>Cabinet Refinishing: </h3><p className="charcoal center">Give your old cabinets a stunning makeover. Breathe new life into your kitchen or bathroom with a fresh color or stain.</p></li>
                        </ul>
                    </div>
                    <div>
                        <img className="no-margin footer-img" src="https://i.imgur.com/kfzoNPT.jpg"  alt="interior of a home" />
                    </div>
                </div>
            </section>
            <section className="bg-teal">
                <h2 className="white">We bring the same passion and detail-oriented approach to your exterior:</h2>
                <div className="detail-container">
                    <ul className="grid">
                        <li className="list-item"><h3 className="white">House Painting:</h3><p className="white center">Transform the curb appeal of your home with a professional exterior paint job. We offer a wide range of durable, weather-resistant paints to withstand the elements.</p></li>
                        <li className="list-item"><h3 className="white">Porch & Deck Painting:</h3><p className="white center">Restore the vibrancy of your outdoor living spaces, creating a welcoming extension of your home's interior.</p></li>
                        <li className="list-item"><h3 className="white">Fence Painting:</h3><p className="white center">Enhance the look and longevity of your fences with a meticulous paint job, protecting them from the elements and boosting your property's visual appeal.</p></li>
                    </ul>
                </div>                
            </section>
            <img className="no-margin bottom-img" src="https://i.imgur.com/pyVWB27.jpg"  alt="exterior of a home" />
        </>
    );
};

export default ServiceDetails;