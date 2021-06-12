import React from "react";
import styled from "styled-components";
import {
	FrauncesFont,
	BarlowFont,
	below,
	MainColors,
} from "../../../src/utilities";

const LocationCard = () => {
	return (
		<Wrapper>
			<StyledHead />
			<Card
				image="../../../assets/about/desktop/illustration-uk.svg"
				title="United Kingdom"
				content={["68  Asfordby Rd", "Alcaston", "SY6 1YA", "+44 1241 918425"]}
			/>
			<Card
				image="../../../assets/about/desktop/illustration-canada.svg"
				title="Canada"
				content={[
					"1528  Eglinton Avenue",
					"Toronto",
					"Ontario M4P 1A6",
					"+1 416 485 2997",
				]}
			/>
			<Card
				image="../../../assets/about/desktop/illustration-australia.svg"
				title="Australia"
				content={[
					"36 Swanston Street",
					"Kewell",
					"Victoria",
					"+61 4 9928 3629",
				]}
			/>
		</Wrapper>
	);
};

const Card = ({ title, content, image }) => {
	const list = content.map((content) => <li>{content}</li>);
	return (
		<StyledCard image={image}>
			<div></div>
			<h4>{title}</h4>
			<ul>{list}</ul>
		</StyledCard>
	);
};
const Head = ({ className }) => {
	return <h3 className={className}>Our headquarters</h3>;
};
const Wrapper = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	width: 90%;
	margin: 0 0 6rem 15%;
	${below.small`
		flex-direction: column;
		margin: 6rem 0 5rem 5%;
	`}
`;
const StyledHead = styled(Head)`
	font: 24px ${FrauncesFont};
	margin-bottom: 4rem;
	width: 100vw;
	color: ${MainColors.grey};
	${below.small`
		text-align: center;
		margin-left: -2rem;
	`}
`;

const StyledCard = styled.div`
	display: block;
	width: 33%;

	div {
		height: 50px;
		width: 50px;
		background: url(${(props) => props.image}) no-repeat center;
		background-size: cover;
		margin-bottom: 2rem;
	}
	h4 {
		margin-bottom: 2rem;
		font: 32px ${FrauncesFont};
	}
	ul {
		font: 1rem ${BarlowFont};
		list-style-type: none;
		margin-left: -2rem;
	}
	li {
		margin-bottom: 1rem;
	}
	${below.large`
		h4 {
			font: 24px ${FrauncesFont};
		}
	`}

	${below.small`
		width: 100%;
		text-align: center;
		div {
			margin: 0 auto;
			margin-bottom: 2rem;
		}
		h4 {
			font: 28px ${FrauncesFont};
		}
		ul{
			margin: none;
			margin-bottom: 4rem;
		}
	`}
`;

export default LocationCard;
