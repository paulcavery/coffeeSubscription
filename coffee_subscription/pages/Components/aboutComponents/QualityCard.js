import React from "react";
import styled from "styled-components";
import {
	FrauncesFont,
	BarlowFont,
	below,
	MainColors,
} from "../../../src/utilities";

const QualityCard = () => {
	return (
		<Wrapper>
			<StyledQualityText />
			<QualityPicture />
		</Wrapper>
	);
};
const Wrapper = styled.div`
	display: inline-block;
	position: relative;
	width: 88%;
	height: 562px;

	padding-top: 5rem;

	margin: 3rem 0 5rem 6%;

	${below.large`
        display: block
        height: 648px;
    `};
	${below.small`
        height: 587px;
    `};
`;

const QualityText = ({ className }) => {
	return (
		<div className={className}>
			<h3>Uncompromising quality</h3>
			<p>
				Although we work with growers who pay close attention to all stages of
				harvest and processing, we employ, on our end, a rigorous quality
				control program to avoid over-roasting or baking the coffee dry. Every
				bag of coffee is tagged with a roast date and batch number. Our goal is
				to roast consistent, user-friendly coffee, so that brewing is easy and
				enjoyable.
			</p>
		</div>
	);
};
const StyledQualityText = styled(QualityText)`
	display: block;
	width: 100%;
	height: 474px;
	background-color: ${MainColors.darkGreyBlue};
	padding-top: 5rem;
	padding-left: 7.5rem;
	color: #fff;
	border-radius: 6px;

	h3 {
		font: 40px ${FrauncesFont};
		margin-bottom: 2.5rem;
	}
	p {
		font: 1rem ${BarlowFont};
		line-height: 1.75rem;
		width: 50%;
	}
	${below.large`
        height: auto;
        padding: 30% 2rem 10% 2rem;
        
        text-align: center;
        h3 {
            font: 32px ${FrauncesFont};
        }
        p {
            width: 100%;
            line-height: 1.75rem;
        }
    `}

	${below.small`
        height: auto;
		padding-top: 40%;
        
        h3 {
            font: 28px ${FrauncesFont};
            margin-bottom: 1.5rem;
        }
        p {
            padding-bottom: 2rem
        }
    `}
`;

const QualityPicture = styled.div`
	width: 445px;
	height: 474px;
	position: absolute;
	top: -2rem;
	margin-left: 60%;
	border-radius: 6px;
	background: url("../../../assets/about/desktop/image-quality.jpg") no-repeat
		center;
	${below.large`
        background: url("../../../assets/about/tablet/image-quality.jpg") no-repeat
		center;
		background-size: cover;
		width: 573px;
		height: 320px;
		border-radius: 6px;
        top: -4rem;
	    left: 0;
		right: 0;
		margin-left: auto;
		margin-right: auto;
    `}
	${below.med`
		border-radius: 6px;
		background-size: cover;
        top: -4rem;
		left: 0;
		right: 0;
		margin-left: auto;
		margin-right: auto;
    `}
	${below.small`
        background: url("../../../assets/about/mobile/image-quality.jpg") no-repeat
		center;
        background-size: cover;
        top: 0;
        left: 0;
		right: 0;
		margin-left: auto;
		margin-right: auto;
        width: 279px;
        height: 156px;
    `}
`;

export default QualityCard;
