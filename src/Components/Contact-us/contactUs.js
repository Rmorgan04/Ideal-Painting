

function ContactUs() {

    function handleSubmit(e) {
        e.preventDefault();
        alert('Thank you for your interest!  We will get in touch with you soon!')
    }

    return (
        <>
            <h2 className="contact-header">Contact Us Today</h2>
            <p className="charcoal center contact-number">Call us at (999)-999-9999</p>
            <form className="contact-us-form">
                <input placeholder="Name" type="name"  name="name" id="name"/>
                <input placeholder="Email" type="email"  name="email" id="email"/>
                <input placeholder="Phone Number" type="tel"  name="tel" id="tel"/>
                <select id="services">
                    <option>Interior</option>
                    <option>Exterior</option>
                </select>
                <textarea placeholder="Text Your Message Here..." />
                <button type="submit" onClick={handleSubmit}>Submit</button>
            </form>
            <iframe title="location" className="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25936.797675861995!2d-94.98179877151709!3d35.649914945336285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87ca05fc90cfb72b%3A0x832eecc830ae9d63!2sSnake%20Creek%20Campground!5e0!3m2!1sen!2sus!4v1714488967381!5m2!1sen!2sus" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </>
    );
};

export default ContactUs;