import { useRef, useState, useEffect } from "react";
import "../styles/LazyImage.css";

function LazyImage({ src, alt, className }) {
  const imgRef = useRef();
  const [isVisible, setIsVisible] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (imgRef.current) observer.observe(imgRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <img
      ref={imgRef}
      src={isVisible ? src : null}
      alt={alt}
      className={`${className} lazy-image ${loaded ? "loaded" : ""}`}
      onLoad={() => setLoaded(true)}
      loading="lazy"
    />
  );
}

export default LazyImage;
