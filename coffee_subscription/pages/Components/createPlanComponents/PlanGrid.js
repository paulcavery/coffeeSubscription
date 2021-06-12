import { CardGridHeader } from "../createPlanComponents/CardGridHeader";
import { GridWrapper } from "../createPlanComponents/cardGrid";
import { Card } from "../../../src/elements/card";

export const PlanGrid = () => {
	return (
		<>
			<CardGridHeader />
			<GridWrapper>
				<Card />
				<Card />
				<Card />
			</GridWrapper>
		</>
	);
};
