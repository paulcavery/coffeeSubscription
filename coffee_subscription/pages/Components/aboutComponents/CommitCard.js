import styled from "styled-components";
import React from "react";
import {
	FrauncesFont,
	BarlowFont,
	below,
	MainColors,
} from "../../../src/utilities";

const CommitCard = () => {
	return (
		<Wrapper>
			<CommitPicture />
			<StyledText />
		</Wrapper>
	);
};

const Wrapper = styled.div`
	display: flex;
	flex-direction: row;
	width: 80%;

	margin: 5rem auto;
	${below.small`
        display: block;
        
        width: 100%;
    `};
`;
const CommitPicture = styled.div`
	width: 445px;
	height: 520px;
	border-radius: 6%;
	background: url("../../assets/about/desktop/image-commitment.jpg") no-repeat
		center;
	${below.large`
        width: 300px;
        height: 470px;
        background: url("../../assets/about/tablet/image-commitment.jpg") no-repeat
		center;
    `};
	${below.small`
        margin: 0 auto;
        width: 327px;
        height: 400px
        background: url("../../assets/about/mobile/image-commitment.jpg") no-repeat
		center;
    `}
`;
const CommitText = ({ className }) => {
	return (
		<div className={className}>
			<h1>Our commitment</h1>
			<p>
				We’re built on a simple mission and a commitment to doing good along the
				way. We want to make it easy for you to discover and brew the world’s
				best coffee at home. It all starts at the source. To locate the specific
				lots we want to purchase, we travel nearly 60 days a year trying to
				understand the challenges and opportunities in each of these places. We
				collaborate with exceptional coffee growers and empower a global
				community of farmers through with well above fair-trade benchmarks. We
				also offer training, support farm community initiatives, and invest in
				coffee plant science. Curating only the finest blends, we roast each lot
				to highlight tasting profiles distinctive to their native growing
				region.
			</p>
		</div>
	);
};
const StyledText = styled(CommitText)`
	display: block;
	width: 50%;
	margin: auto auto;
	h1 {
		font: 40px ${FrauncesFont};
		margin-bottom: 2rem;
	}
	p {
		font: 16px ${BarlowFont};
		line-height: 1.5rem;
	}
	${below.large`
        margin: 0 auto;
        h1 {
            font: 32px ${FrauncesFont};
        }
    `}
	${below.small`
        width: 80%;
        margin: 3rem auto;
        text-align: center;
        h1 {
            margin-bottom: 2rem;
	    }
    `};
`;

export default CommitCard;
