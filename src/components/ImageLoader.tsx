import { ComponentPropsWithRef, useEffect, useRef } from "react";
import "./ImageLoader.css";

type ImageLoaderProps = {
  src?: string;
  animationClassName?: string;
  rounded?: boolean;
} & ComponentPropsWithRef<"img">;

const ImageLoader = (props: ImageLoaderProps) => {
  const {
    src,
    className = "",
    animationClassName = "slide-in-down",
    onClick,
    rounded,
    ...rest
  } = props;
  const containerRef = useRef<HTMLElement>(null);
  let cName = `image-loader ${className} ${animationClassName}`.trim();
  if (rounded) cName = `image-loader--rounded ${cName}`.trim();
  const loaded = useRef(false);
  const loading = useRef(false);
  const error = useRef(false);
  const scrollOpts = { capture: true, passive: true };
  const loadImageWhenInView = () => {
    const exit = !src;
    if (exit) return;

    window.removeEventListener("scroll", loadImageWhenInView, scrollOpts);

    const img = new Image();
    img.onerror = () => {
      error.current = true;
      loaded.current = true;
      loading.current = false;
    };
    img.onload = () => {
      loaded.current = true;
      loading.current = false;
    };

    img.src = src;
  };

  useEffect(() => {
    if (!src) return unmount;

    const { current } = containerRef;
    const notInView = current ? !isInViewport(current) : false;
    if (notInView) {
      window.addEventListener("scroll", loadImageWhenInView, scrollOpts);
      return unmount;
    }

    // If here, "containerRef.current" is falsy, or "forceLoad" is true
    loadImageWhenInView();
    return unmount;

    function unmount() {
      window.removeEventListener("scroll", loadImageWhenInView, true);
      error.current = false;
      loaded.current = false;
      loading.current = true;
    }
  }, [src]);

  if (loading.current)
    return <span ref={containerRef} className="spinner--before" />;

  return (
    <img
      {...rest}
      onClick={onClick}
      className={cName}
      src={src}
      alt={rest.alt}
    />
  );
};

export default ImageLoader;

export const RoundedImg = (props: ImageLoaderProps) => (
  <ImageLoader {...props} rounded />
);

/** @description Assert that component bounding rect is on-screen */
function isInViewport(elem: HTMLElement) {
  if (!elem) return false;
  const boundingRect = elem.getBoundingClientRect();
  const { top, left, bottom, right } = boundingRect;
  const { documentElement } = window.document;
  return (
    top >= 0 &&
    left >= 0 &&
    bottom <= (window.innerHeight || documentElement.clientHeight) &&
    right <= (window.innerWidth || documentElement.clientWidth)
  );
}
