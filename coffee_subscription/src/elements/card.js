import styled from "styled-components";
import { FrauncesFont, BarlowFont, MainColors } from "../utilities";

const Card = ({ title, content }) => {
	return (
		<StyledCard>
			<h1>{title}</h1>
			<p>{content}</p>
		</StyledCard>
	);
};

const StyledCard = styled.div`
	display: block;
	text-align: left;
	height: 250px;
	width: 223px;
	border-radius: 6px;
	color: #fff;
	background-color: ${MainColors.lightCream};
	h1 {
		font: 24px ${FrauncesFont};
	}
	p {
		font: 16px ${BarlowFont};
	}
`;
export default Card;
