

function Estimate() {
    return (
        <form>
            <h3>Get your Free Estimate today</h3>
            <input autoComplete="on" id='name' type="text" name="name" placeholder="Name"/>
            <input autoComplete="on" id='phone' type="tel" name='phone' placeholder="Phone Number" />
            <input autoComplete="on" id="email" type="email" name="email" placeholder="Email Address" />
            <button type="submit">Let's Get Started</button>
        </form>
    );
};

export default Estimate;