import { faMotorcycle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./DishCard.css";

function DishCard({ image, name, description, price }) {
  return (
    <article className="dish-card">
      <div className="dish-card__image-box">
        <img className="dish-card__image" src={image} alt={name} />
      </div>
      <div className="dish-card__content">
        <div className="dish-card__header">
          <h3 className="dish-card__name">{name}</h3>
          <span className="dish-card__price">${price}</span>
        </div>
        <div className="dish-card__footer">
          <p className="dish-card__description">{description}</p>
          <button className="dish-card__order-btn">
            <span>Order a delivery</span>
            <FontAwesomeIcon icon={faMotorcycle} />
          </button>
        </div>
      </div>
    </article>
  );
}

export default DishCard;
