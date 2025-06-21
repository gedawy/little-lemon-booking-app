import { Link } from "react-router-dom";
import "./Nav.css";

const links = [
  { id: 1, name: "Home", href: "/" },
  { id: 2, name: "About", href: "/about" },
  { id: 3, name: "Menu", href: "/menu" },
  { id: 4, name: "Reservations", href: "/booking" },
  { id: 5, name: "Order Online", href: "/order" },
  { id: 6, name: "Login", href: "/login" },
];

function Nav({ isExpanded, close }) {
  return (
    <nav className="nav">
      <ul className={isExpanded ? "nav__list open" : "nav__list"}>
        {links.map((link) => (
          <li key={link.id} className="nav__item">
            <Link
              to={link.href}
              href={link.href}
              className="nav__link"
              onClick={close}
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Nav;
