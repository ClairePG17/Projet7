import "./_card.scss";


export default function Card({ title, image }) {
  return (
    <div className="card">
      <img className="card__img" src={image} alt={title} />
      <h3 className="card__title">{title}</h3>
    </div>
  );
}

