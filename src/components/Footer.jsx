import "../styles/Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Company Info */}
        <div className="footer-section">
          <h3 className="footer-title">ShoppyGlobe</h3>
          <p className="footer-text">
            Your one-stop shop for the best products at unbeatable prices.
            Bringing quality and convenience right to your doorstep.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h4 className="footer-subtitle">Quick Links</h4>
          <ul className="footer-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Support */}
        <div className="footer-section">
          <h4 className="footer-subtitle">Support</h4>
          <ul className="footer-links">
            <li><Link to="/faq">FAQ</Link></li>
            <li><Link to="/returns">Returns</Link></li>
            <li><Link to="/privacy">Privacy Policy</Link></li>
            <li><Link to="/terms">Terms & Conditions</Link></li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="footer-section">
          <h4 className="footer-subtitle">Follow Us</h4>
          <div className="footer-socials">
            <a href="#"><i className="fab fa-facebook"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-linkedin"></i></a>
          </div>
          <p className="footer-contact">
            📧 support@shoppyglobe.com
          </p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} ShoppyGlobe. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
