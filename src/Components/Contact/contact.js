

function Contact() {
    return (
        <div>
            <form>
                <h3>Ready to transform your space?</h3>
                <p>Contact us today for a free consultation!</p>
                <input id='name' type="text" name="name" placeholder="Name"/>
                <input id="email" type="email" name="email" placeholder="Email Address" />
                <textarea placeholder="Type Your Message Here..." id="message" />
                <button type="submit">Get in Touch</button>
            </form>
        </div>
    );
};

export default Contact;