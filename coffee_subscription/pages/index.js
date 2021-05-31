import { ButtonOne } from "../src/elements";
import StyledFooter from "./Components/footer";
import Header from "./Components/header";
import { GlobalStyle } from "../src/global";
import AppWrapper from "../src/elements/AppWrapper";

export default function Home() {
	return (
		<>
			<AppWrapper>
				<GlobalStyle />
				<Header />
				<StyledFooter />
			</AppWrapper>
		</>
	);
}
