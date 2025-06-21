import { Link } from "react-router-dom";
import HeroFood from "../../../assets/restauranfood.jpg";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="container textbox-container">
        <div className="hero__textbox">
          <h1 className="hero__textbox-title">Little Lemon</h1>
          <h2 className="hero__textbox-subtitle">Chicago</h2>
          <p className="hero__textbox-desc">
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist
          </p>
          <Link to="/booking" className="btn-primary">
            Reserve a table
          </Link>
        </div>
        <div className="hero__image-box">
          <img className="hero__image" src={HeroFood} alt="hero food" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
