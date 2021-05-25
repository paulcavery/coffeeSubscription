import styled from "styled-components";
import { FrauncesFont, BarlowFont } from "../utilities";

const Card = ({ className, key, title, content }) => {
	return (
		<div key={key} className={className}>
			<h1>{title}</h1>
			<p>{content}</p>
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
	background-color: ${(props) => props.cardColor};
	h1 {
		font: 24px ${FrauncesFont};
	}
	p {
		font: 16px ${BarlowFont};
	}
`;

export default StyledCard;
