import StyledFooter from "./Components/footer";
import Header from "./Components/header";
import Hero from "./Components/hero";
import AppWrapper from "../src/elements/AppWrapper";
import CommitCard from "./Components/aboutComponents/CommitCard";
import QualityCard from "./Components/aboutComponents/QualityCard";
import LocationCard from "./Components/aboutComponents/LocationCard";

export default function About() {
	return (
		<>
			<AppWrapper>
				<Header />
				<Hero
					title="About Us"
					content="Coffeeroasters began its journey of exotic discovery in 1999,
								highlighting stories of coffee from around the world. We have since been
								dedicated to bring the perfect cup - from bean to brew - in every
								shipment."
					background="../../../assets/about/desktop/image-hero-whitecup.jpg"
					backgroundMobile="../../../assets/about/mobile/image-hero-whitecup.jpg"
					backgroundTablet="../../../assets/about/tablet/image-hero-whitecup.jpg"
				/>
				<CommitCard />
				<QualityCard />
				<LocationCard />
				<StyledFooter />
			</AppWrapper>
		</>
	);
}
