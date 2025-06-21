import Rating from "../../../components/Rating/Rating";
import "./Testimonial.css";

function Testimonial({ image, review, name, rating }) {
  return (
    <article className="testimonial">
      <div className="testimonial__image-box">
        <img src={image} alt={name} className="testimonial__image" />
      </div>
      <div className="testimonial__content">
        <p className="testimonial__text">"{review}"</p>
        <p className="testimonial__author">- {name}</p>
        <span className="testimonial__rating">
          <Rating number={rating} />
        </span>
      </div>
    </article>
  );
}

export default Testimonial;
