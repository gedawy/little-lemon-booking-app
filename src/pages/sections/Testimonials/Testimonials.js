import Testimonial from "./Testimonial";
import "./Testimonials.css";

const reviews = [
  {
    name: "Sarah M.",
    review: "Fresh ingredients and fast service. The lemon dessert is a must!",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    rating: 4,
  },
  {
    name: "Daniel R.",
    review: "Loved the Mediterranean flavors — everything tasted authentic.",
    image: "https://randomuser.me/api/portraits/men/34.jpg",
    rating: 5,
  },
  {
    name: "Elena P.",
    review: "Great food and cozy vibe. Will definitely come back!",
    image: "https://randomuser.me/api/portraits/women/22.jpg",
    rating: 4,
  },
  {
    name: "Marcus B.",
    review: "Bruschetta was spot on. Friendly staff too.",
    image: "https://randomuser.me/api/portraits/men/17.jpg",
    rating: 4.5,
  },
  {
    name: "Priya K.",
    review: "Everything was delicious and beautifully presented.",
    image: "https://randomuser.me/api/portraits/women/48.jpg",
    rating: 5,
  },
];

function Testimonials() {
  return (
    <section className="testimonials">
      <div className="container testimonials__container">
        <h3 className="testimonials__title">Testimonials</h3>
        <div className="testimonials__list">
          {reviews.map((review, index) => (
            <Testimonial
              key={index}
              name={review.name}
              review={review.review}
              image={review.image}
              rating={review.rating}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
