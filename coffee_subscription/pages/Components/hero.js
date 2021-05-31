import React from "react";
import styled from "styled-components";
import { FrauncesFont, BarlowFont, below } from "../../src/utilities";

export default function Hero({
	background,
	backgroundTablet,
	backgroundMobile,
	fontSize,
	fontMobile,
	fontTablet,
	title,
	content,
}) {
	return (
		<StyledHero
			background={background}
			backgroundTablet={backgroundTablet}
			backgroundMobile={backgroundMobile}
			fontSize={fontSize}
			fontMobile={fontMobile}
			fontTablet={fontTablet}
		>
			<h1>{title}</h1>
			<p>{content}</p>
		</StyledHero>
	);
}

const StyledHero = styled.div`
	width: 90%;
	height: 450px;
	background: url(${(props) => props.background}) no-repeat center;
	background-size: cover;
	color: #fff;
	margin-left: 5%;
	border-radius: 6px;

	h1 {
		font: ${(props) => props.fontSize || "40px"} ${FrauncesFont};
		margin-left: 8%;
		padding-top: 10rem;
	}
	p {
		font: 16px ${BarlowFont};
		margin: 2rem 0 0 8%;
		width: 32%;
		line-height: 1.5rem;
	}
	${below.large`
        background: url(${(props) => props.backgroundTablet})  no-repeat center;
		
        background-size: cover;
        height: 400px;
        p {
            width: 50%;
        }
		h1{
			font: ${(props) => props.fontTablet || "32px"} ${FrauncesFont};
		}
    `};
	${below.small`
        background: url( ${(props) => props.backgroundMobile}) no-repeat center;
        background-size: cover;
		
        height: 400px;
        text-align: center;
        p{
			margin: 1rem auto;
            width: 75%;
        }
		h1{
			margin: 0;
			font: ${(props) => props.fontMobile || "28px"} ${FrauncesFont};
		}
    `}
`;
