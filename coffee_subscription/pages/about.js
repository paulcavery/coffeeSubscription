import StyledFooter from "./Components/footer";
import Header from "./Components/header";
import { StyledCard } from "../src/elements/card";
import { MainColors } from "../src/utilities";

export default function About() {
	return (
		<>
			<Header />
			<StyledCard
				cardColor={MainColors.lightCream}
				title={"Filter"}
				content={
					"For drip or pour-over coffee methods such as V60 or Aeropress"
				}
			/>
			<StyledFooter />
		</>
	);
}
