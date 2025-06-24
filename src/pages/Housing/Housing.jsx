import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import SlideShow from "../../components/SlideShow/SlideShow";
import logements from "../../data/data.json";
import Collapse from "../../components/Collapse/Collapse";
import StarRating from "../../components/StarRating/StarRating";
import Tags from "../../components/Tags/Tags";
import EquipmentsList from "../../components/EquipmentsList/EquipmentsList";
import "./_housing.scss";

export default function Housing() {
  const { id } = useParams();
  const navigate = useNavigate();
  const logement = logements.find((item) => item.id === id);

  useEffect(() => {
    if (!logement) {
      navigate("/NotFound");
    }
  }, [logement, navigate]);

  if (!logement) {
    return null;
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
          <Tags tags={logement.tags} />
        </div>
        <div className="housing__title__hostAndRating">
          <div className="housing__title__host">
            <img src={logement.host.picture}></img>
            <p>
              {firstName}
              <br />
              {lastName}
            </p>
          </div>
          <StarRating rating={logement.rating} />
        </div>
      </div>

      <div className="housing__services">
        <Collapse title="Description">{logement.description}</Collapse>
        <Collapse title="Equipement">
          <EquipmentsList equipments={logement.equipments} />
        </Collapse>
      </div>
    </div>
  );
}
