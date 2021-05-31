import StyledCard from "../src/elements/card";
import StyledFooter from "./Components/footer";
import Header from "./Components/header";
import StyledAboutHero from "./Components/aboutComponents/hero";
import AppWrapper from "../src/elements/AppWrapper";

export default function About() {
	return (
		<>
			<AppWrapper>
				<Header />
				<StyledAboutHero />
				<StyledCard />
				<StyledFooter />
			</AppWrapper>
		</>
	);
}
