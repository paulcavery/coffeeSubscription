import Header from "./Components/header";
import StyledFooter from "./Components/footer";
import AppWrapper from "../src/elements/AppWrapper";
import Hero from "./Components/hero";

export default function CreatePlan() {
	return (
		<>
			<AppWrapper>
				<Header />
				<Hero
					title="Create a plan"
					content="Build a subscription plan that best fits your needs. We offer an assortment of the best artisan coffees from around the globe delivered fresh to your door."
					background="../../../assets/plan/desktop/image-hero-blackcup.jpg"
					backgroundMobile="../../../assets/plan/mobile/image-hero-blackcup.jpg"
					backgroundTablet="../../../assets/plan/tablet/image-hero-blackcup.jpg"
					fontSize="72px"
					fontTablet="48px"
					fontMobile="40px"
				/>
				<StyledFooter />
			</AppWrapper>
		</>
	);
}
