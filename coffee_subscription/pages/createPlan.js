import Header from "./Components/header";
import StyledFooter from "./Components/footer";
import AppWrapper from "../src/elements/AppWrapper";
import Hero from "./Components/hero";

import { useState } from "react";
import { Modal } from "./Components/createPlanComponents/modal";
import { ButtonOne } from "../src/elements/Button";
import { GridWrapper } from "./Components/createPlanComponents/cardGrid";
import Card from "../src/elements/card";
import { CardGridHeader } from "./Components/createPlanComponents/CardGridHeader";
import { Plan } from "./data/plan";
const PlanGrid = () => {
	const [isCardGridOpen, setIsCardGridOpen] = useState(0);

	return Plan.map((p) => (
		<>
			<CardGridHeader
				isOpen={isCardGridOpen}
				title={p.title}
				open={p.id}
				setOpen={setIsCardGridOpen}
			/>
			<GridWrapper isOpen={isCardGridOpen} open={p.id}>
				<Card CardTitle={p.cardTitle1} content={p.cardContent1} />
				<Card CardTitle={p.cardTitle2} content={p.cardContent2} />
				<Card CardTitle={p.cardTitle3} content={p.cardContent3} />
			</GridWrapper>
		</>
	));
};
export default function CreatePlan() {
	const [isModalOpen, setIsModalOpen] = useState(false);

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

				<PlanGrid />
				<Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
				<ButtonOne onClick={() => setIsModalOpen(!isModalOpen)}>
					Create my plan!
				</ButtonOne>
				<StyledFooter />
			</AppWrapper>
		</>
	);
}
