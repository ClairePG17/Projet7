import arrowBack from "../../assets/arrow_back.svg";   
import arrowForward from "../../assets/arrow_forward.svg"; 
import "./_slideShow.scss"; 
import { useState } from "react";

export default function SlideShow({ pictures }) {
  const [current, setCurrent] = useState(0);
  const total = pictures.length;

  if (total === 0) return null;

  const goToPrev = () => setCurrent((prev) => (prev === 0 ? total - 1 : prev - 1));
  const goToNext = () => setCurrent((prev) => (prev === total - 1 ? 0 : prev + 1));

  return (
    <div className="slideshow">
      <img className="slideshow__img" src={pictures[current]} alt={`Photo ${current + 1}`} />
      {total > 1 && (
        <>
          <img
            src={arrowBack}
            alt="Précédent"
            className="slideshow__arrow slideshow__arrow--left"
            onClick={goToPrev}
          />
          <img
            src={arrowForward}
            alt="Suivant"
            className="slideshow__arrow slideshow__arrow--right"
            onClick={goToNext}
          />
          <div className="slideshow__counter">
            {current + 1}/{total}
          </div>
        </>
      )}
    </div>
  );
}
