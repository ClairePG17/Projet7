import logements from "../../data/data.json";
import Header from "../../components/header/header";
import Card from "../../components/card/card";
import Footer from "../../components/footer/footer";
import Banner from "../../components/banner/banner"

export default function Home() {
    return (
      <>
        <main className="home-main">
            <Banner />
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