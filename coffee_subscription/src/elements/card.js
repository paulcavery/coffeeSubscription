import styled from "styled-components";
import { FrauncesFont, BarlowFont, MainColors } from "../utilities";

const Card = ({ CardTitle, content }) => {
	return (
		<StyledCard>
			<h1>{CardTitle}</h1>
			<p>{content}</p>
		</StyledCard>
	);
};

const StyledCard = styled.div`
	display: block;
	text-align: left;
	height: 250px;
	width: 300px;
	border-radius: 6px;
	color: #000;
	background-color: #f4f1eb;
	padding: 2.5rem;
	&:hover {
		background-color: #fdd6ba;
	}
	h1 {
		font: 24px ${FrauncesFont};
		padding-bottom: 2rem;
	}
	p {
		font: 16px ${BarlowFont};
	}
`;
export default Card;
