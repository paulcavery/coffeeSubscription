import { ButtonOne } from "../src/elements";
import StyledFooter from "./Components/footer";
import Header from "./Components/header";
import { GlobalStyle } from "../src/global";

export default function Home() {
	return (
		<>
			<GlobalStyle />
			<Header />
			<ButtonOne>Create your plan</ButtonOne>
			<StyledFooter />
		</>
	);
}
