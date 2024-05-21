import Hero from "../components/UI/Hero";
import bannerImg from "../assets/images/banner.jpeg";

export default function Home() {
    return (
        <Hero
            img={bannerImg.src}
            title="Societe Générale"
            description="Bank of Paris"
            link="/account"
            link_text="Connexion"
        />
    )
}

