import starFull from "../../assets/star_full.svg";   
import starEmpty from "../../assets/star_empty.svg";  

export default function StarRating({ rating, max = 5 }) {
  const stars = [];
  for (let i = 1; i <= max; i++) {
    stars.push(
      <img
        key={i}
        src={i <= rating ? starFull : starEmpty}
        alt={i <= rating ? "étoile pleine" : "étoile vide"}
        className="star"
      />
    );
  }
  return <div className="star-rating">{stars}</div>;
}