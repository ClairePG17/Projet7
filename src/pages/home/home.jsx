import logements from "../../data/data.json";
import Card from "../../components/Card/Card";
import Banner from "../../components/Banner/Banner";
import ImageBanner from "../../assets/banner_home.png";
import "./_home.scss";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <main className="home-main">
        <Banner
          image={ImageBanner}
          text={
            <>
              Chez vous,<span className="mobile-break"></span> partout et ailleurs
            </>
          }
        />
        <div className="cards-container">
          {logements.map((logement) => (
            <Link
              to={`/Housing/${logement.id}`}
              key={logement.id}
            >
              <Card
                title={logement.title}
                image={logement.cover}
              />
            </Link>
          ))}
        </div>
      </main>
    </>
  );
}
