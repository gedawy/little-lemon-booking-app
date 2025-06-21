import Brothers from "../../../assets/adrian_mario.jpg";
import Chef from "../../../assets/chef.jpg";
import "./Story.css";

function Story() {
  return (
    <section className="story">
      <div className="container story__container">
        <div className="story__textbox">
          <h1 className="story__textbox-title">Little Lemon</h1>
          <h2 className="story__textbox-subtitle">Chicago</h2>
          <p className="story__textbox-desc">
            Two brothers opened the restaurant to share the Mediterranean
            flavors they grew up with, inspired by their grandmother’s cooking.
            Blending tradition with a modern twist, they turned family recipes
            into a fresh, vibrant menu that honors their roots.
          </p>
        </div>
        <div className="story__image-box">
          <div className="story__image-container story__image--left">
            <img className="story__image" src={Chef} alt="adrian" />
          </div>
          <div className="story__image-container story__image--right">
            <img className="story__image" src={Brothers} alt="brothers" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Story;
