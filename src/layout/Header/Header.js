import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/Logo.svg";
import "./Header.css";
import Nav from "./Nav";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header>
      <div className="container header">
        <Link to="/">
          <img className="logo" src={Logo} alt="little lemon logo" />
        </Link>
        <Nav isExpanded={isMenuOpen} close={() => setIsMenuOpen(false)} />
        <button
          className="header__menu-btn"
          aria-label="Toggle navigation menu"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <FontAwesomeIcon className="header__menu-icon" icon={faXmark} />
          ) : (
            <FontAwesomeIcon className="header__menu-icon" icon={faBars} />
          )}
        </button>
      </div>
    </header>
  );
}

export default Header;
