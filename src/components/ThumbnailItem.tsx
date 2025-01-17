import { ComponentPropsWithRef } from "react";
import ImageLoader from "./ImageLoader";
import "./ThumbnailItem.css";

type TSProps = { src: string; text?: string } & ComponentPropsWithRef<"div">;

/**
 * Single (interactive) Thumbnail item with an image and a line of text
 * @param props Component Props
 * @returns JSX Element
 */
export default function ThumbnailItem(props: TSProps) {
  const { src, text = "Text", className = "", ...divProps } = props;
  const classlist = `thumbnail ${className}`.trim();
  const logClickEvent = () => console.log(`Clicked thumbnail item "${text}"`);

  return (
    <div {...divProps} className={classlist} onClick={logClickEvent}>
      <span>
        <ImageLoader animationClassName="scale-in" width={50} src={src} />
        <h4 className="item-title">{text}</h4>
      </span>
    </div>
  );
}
