import logements from "../../data/data.json";
import Card from "../../components/Card/Card";
import Banner from "../../components/Banner/Banner";
import ImageBanner from "../../assets/banner_home.png";
import './_home.scss';

export default function Home() {
  return (
    <>
      <main className="home-main">
        <Banner image={ImageBanner} text="Chez vous, partout et ailleurs" />
        <div className="cards-container">
          {logements.map((logement) => (
            <Card
              key={logement.id}
              title={logement.title}
              image={logement.cover}
              description={logement.description}
            />
          ))}
        </div>
      </main>
    </>
  );
}
