

function Contact() {

    function handleSubmit(e) {
        e.preventDefault();
        alert('Thank you for your interest!  We will get in touch with you soon!')
    }

    return (
        <section className="contact-section">
            <form>
                <h3>Ready to transform your space?</h3>
                <p>Contact us today for a free consultation!</p>
                <input autoComplete="on" id='name' type="text" name="name" placeholder="Name"/>
                <input autoComplete="on" id="email" type="email" name="email" placeholder="Email Address" />
                <textarea placeholder="Type Your Message Here..." id="message" />
                <button onClick={handleSubmit} type="submit">Get in Touch</button>
            </form>
        </section>
    );
};

export default Contact;