import React from "react";
import styled from "styled-components";
import { FrauncesFont, BarlowFont, below } from "../../../src/utilities";

const AboutHero = ({ className }) => {
	return (
		<div className={className}>
			<h1>About Us</h1>
			<p>
				Coffeeroasters began its journey of exotic discovery in 1999,
				highlighting stories of coffee from around the world. We have since been
				dedicated to bring the perfect cup - from bean to brew - in every
				shipment.
			</p>
		</div>
	);
};

export default styled(AboutHero)`
	width: 90%;
	height: 450px;
	background: url("../../../assets/about/desktop/image-hero-whitecup.jpg")
		no-repeat center;
	background-size: cover;
	color: #fff;
	margin-left: 5%;
	border-radius: 6px;

	h1 {
		font: 40px ${FrauncesFont};
		margin-left: 10%;
		padding-top: 10rem;
	}
	p {
		font: 16px ${BarlowFont};
		margin: 2rem 0 0 10%;
		width: 32%;
	}
	${below.large`
        background: url("../../../assets/about/tablet/image-hero-whitecup.jpg")
		no-repeat center;
        background-size: cover;
        height: 400px;
        p {
            width: 50%;
        }
    `};
	${below.small`
        background: url("../../../assets/about/mobile/image-hero-whitecup.jpg")
		no-repeat center;
        background-size: cover;
        height: 400px;
        text-align: center;
        p{
            width: 75%;
        }
    `}
`;
