import "../styles/Contact.css";

function Contact() {
  return (
    <div className="contact-wrapper">
      <h1 className="contact-heading">Contact Us</h1>
      <p className="contact-subtext">
        Have questions or need support? We’re here to help!
      </p>

      <div className="contact-section">

        {/* Contact Info */}
        <div className="contact-info">
          <h2>Get In Touch</h2>

          <div className="info-item">
            <span className="icon">📍</span>
            <p>Bengaluru, Karnataka, India</p>
          </div>

          <div className="info-item">
            <span className="icon">📞</span>
            <p>+91 98765 43210</p>
          </div>

          <div className="info-item">
            <span className="icon">📧</span>
            <p>support@shopstore.com</p>
          </div>
        </div>

        {/* Contact Form */}
        <form className="contact-form">
          <div className="form-row">
            <div className="form-group">
              <label>Your Name</label>
              <input type="text" placeholder="Enter your name" required />
            </div>

            <div className="form-group">
              <label>Email Address</label>
              <input type="email" placeholder="Enter your email" required />
            </div>
          </div>

          <div className="form-group">
            <label>Your Message</label>
            <textarea placeholder="Type your message..." rows="4" required></textarea>
          </div>

          <button className="contact-btn">Send Message</button>
        </form>

      </div>
    </div>
  );
}

export default Contact;

