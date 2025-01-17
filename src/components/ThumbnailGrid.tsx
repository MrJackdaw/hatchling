import sunrise from "assets/sunrise-alarm.svg";
import wavy from "assets/wavy-lines-icon.svg";
import heart from "assets/sunshine-heart-icon.svg";
import ThumbnailItem from "./ThumbnailItem";
import "./ThumbnailGrid.css";

export default function ThumbnailGrid() {
  return (
    <section className="thumb-grid">
      <h2 className="title">Your heading here</h2>

      <section className="thumbnails">
        <ThumbnailItem src={wavy} />
        <ThumbnailItem src={heart} />
        <ThumbnailItem src={sunrise} />
      </section>
    </section>
  );
}
