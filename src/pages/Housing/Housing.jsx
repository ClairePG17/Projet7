import { useParams } from "react-router-dom";
import SlideShow from "../../components/SlideShow/SlideShow";
import logements from "../../data/data.json";
import Collapse from "../../components/Collapse/Collapse";
import StarRating from "../../components/StarRating/StarRating";
import Tags from "../../components/Tags/Tags";
import EquipmentsList from "../../components/EquipmentsList/EquipmentsList";
import "./_housing.scss";

export default function Housing() {
  const { id } = useParams();
  const logement = logements.find((item) => item.id === id);

  if (!logement) {
    return <div>Logement introuvable</div>;
  }

  const [firstName, lastName] = logement.host.name.split(" ");
  const [region, city] = logement.location.split(" - ");

  return (
    <div className="housing">
      <SlideShow pictures={logement.pictures} />
      <div className="housing__title">
        <div className="housing__title__text">
          <h1>{logement.title}</h1>
          <p>
            {city}, {region}
          </p>
        </div>
        <div className="housing__title__host">
          <img src={logement.host.picture}></img>
          <p>
            {firstName}
            <br />
            {lastName}
          </p>
        </div>
      </div>
      <div className="housing__tags-rating">
        <Tags tags={logement.tags} />
        <StarRating rating={Number(logement.rating)} />
      </div>
      <div className="housing__services">
        <Collapse title="Description">{logement.description}</Collapse>
        <Collapse title="Equipement"><EquipmentsList equipments={logement.equipments} /></Collapse>
      </div>
    </div>
  );
}
