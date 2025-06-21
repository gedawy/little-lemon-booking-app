import Hero from "../sections/Hero/Hero";
import Specials from "../sections/Specials/Specials";
import Story from "../sections/Story/Story";
import Testimonials from "../sections/Testimonials/Testimonials";
import "./HomePage.css";
function HomePage() {
  return (
    <>
      <Hero />
      <Specials />
      <Testimonials />
      <Story />
    </>
  );
}

export default HomePage;
