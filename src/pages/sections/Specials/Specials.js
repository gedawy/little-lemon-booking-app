import DishCard from "./DishCard";
import "./Specials.css";

import bruschetta from "../../../assets/bruschetta.jpg";
import greekSalad from "../../../assets/greek-salad.jpg";
import lemonDessert from "../../../assets/lemon-dessert.jpg";

const SPECIALS = [
  {
    id: 1,
    title: "Greek Salad",
    description:
      "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
    price: 12.99,
    image: greekSalad,
  },
  {
    id: 2,
    title: "Bruschetta",
    description:
      "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
    price: 5.99,
    image: bruschetta,
  },
  {
    id: 3,
    title: "Lemon Dessert",
    description:
      "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
    price: 5.0,
    image: lemonDessert,
  },
];

function Specials() {
  return (
    <section className="specials">
      <div className="container specials__row">
        <h3 className="specials__title">This week specials!</h3>
        <button className="btn-secondary">Online Menu</button>
      </div>
      <div className="container specials__grid">
        {SPECIALS.map((dish) => (
          <DishCard
            key={dish.id}
            image={dish.image}
            name={dish.title}
            description={dish.description}
            price={dish.price}
          />
        ))}
      </div>
    </section>
  );
}

export default Specials;
