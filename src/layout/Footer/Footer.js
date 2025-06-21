import {
  faFacebook,
  faInstagram,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Logo from "../../assets/logo-white.png";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <img
          className="footer__logo"
          src={Logo}
          alt="little lemon white logo"
        />

        <div className="nav-main">
          <p className="footer__nav-title">Main Navigation</p>
          <ul className="footer__nav-list">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Menu</a>
            </li>
            <li>
              <a href="#">Reservations</a>
            </li>
            <li>
              <a href="#">Order Online</a>
            </li>
            <li>
              <a href="#">Login</a>
            </li>
          </ul>
        </div>

        <div className="nav-contact">
          <p className="footer__nav-title">Contact</p>
          <ul className="footer__nav-list">
            <li className="footer__nav-list-info">
              <FontAwesomeIcon className="icon" icon={faLocationDot} />
              <span>1234 W Lakeview Ave Chicago, IL 60657</span>
            </li>
            <li className="footer__nav-list-info">
              <FontAwesomeIcon className="icon" icon={faPhone} />
              <span>(312) 555-0198</span>
            </li>
            <li className="footer__nav-list-info">
              <FontAwesomeIcon className="icon" icon={faEnvelope} />
              <span>contact@littlelemon.com</span>
            </li>
          </ul>
        </div>

        <div className="nav-social">
          <p className="footer__nav-title">Social Media Links</p>
          <ul className="footer__nav-list footer__nav-list--social">
            <li>
              <a href="#">
                <FontAwesomeIcon className="icon" icon={faFacebook} />
              </a>
            </li>
            <li>
              <a href="#">
                <FontAwesomeIcon className="icon" icon={faInstagram} />
              </a>
            </li>
            <li>
              <a href="#">
                <FontAwesomeIcon className="icon" icon={faXTwitter} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
