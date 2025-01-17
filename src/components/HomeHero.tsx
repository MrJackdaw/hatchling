import hero from "assets/hero-image.png";
import ImageLoader from "./ImageLoader";
import "./HomeHero.css";
import Button from "./Button";

export default function HomeHero() {
  const goToLearnMore = () => console.log(`Clicked "Learn More"`);

  return (
    <section className="hero--home">
      <ImageLoader src={hero} animationClassName="fade-in" />

      <div className="content slide-in-right">
        <h1>Rise & Shine</h1>
        <p>
          Coffee cortado, qui beans galão froth to go. Blue mountain et single
          origin aged flavor variety affrogato.
        </p>

        <Button type="button" onClick={goToLearnMore} className="pulse">
          Learn More
        </Button>
      </div>
    </section>
  );
}
