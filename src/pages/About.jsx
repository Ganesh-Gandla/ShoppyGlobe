import "../styles/About.css"

function About() {
    return (
        <div className="about-container">
            <h1 className="about-heading">About Our Store</h1>

            <p className="about-text">
                Welcome to our online shopping store! We offer a wide range of high-quality
                products at the best prices, providing you a smooth and enjoyable shopping
                experience.
            </p>

            <section className="about-section">
                <h2 className="about-subheading">Our Mission</h2>
                <p className="about-text">
                    Our mission is to make online shopping simple, fast, and enjoyable for everyone.
                </p>
            </section>

            <section className="about-section">
                <h2 className="about-subheading">Why Choose Us?</h2>
                <ul className="about-list">
                    <li>✔ Quality products</li>
                    <li>✔ Fast delivery</li>
                    <li>✔ Secure checkout</li>
                    <li>✔ Excellent customer support</li>
                </ul>
            </section>

            <section className="about-section">
                <h2 className="about-subheading">Contact Us</h2>
                <p className="about-text">
                    Email: support@store.com <br />
                    Phone: +91 98765 43210
                </p>
            </section>
        </div>


    )
}
export default About;