import styled from "styled-components";
import { FrauncesFont, BarlowFont, MainColors } from "../utilities";

const Card = ({ className }) => {
	return (
		<div className={className}>
			<h1>Filter</h1>
			<p>dfjhkdjfhrjlhieurgiuwherg</p>
		</div>
	);
};

const StyledCard = styled(Card)`
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

export default StyledCard;
