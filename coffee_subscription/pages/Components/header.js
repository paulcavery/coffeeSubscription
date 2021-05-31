import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";
import { useState } from "react";
import {
	BarlowFont,
	FrauncesFont,
	MainColors,
	below,
} from "../../src/utilities";

const NavBar = styled.nav`
	position: absolute;
	top: 0;
	left: 5%;
	background: #fff;
	color: ${MainColors.grey};
	padding: 10px 5%;
	width: 90%;
	height: 100px;
	line-height: 100px;
	font: 700 12px ${BarlowFont};
	margin-bottom: 5rem;
	.NavBrand {
		position: absolute;
		top: 2.25rem;
		left: 1rem;
	}
`;
const NavList = styled.ul`
	vertical-align: middle;
	display: inline-block;
	list-style-type: none;
	position: absolute;
	top: 2.5rem;
	right: 1rem;
	a {
		& :hover {
			text-decoration: none;
			border-bottom: 1px solid #000;
			color: #000;
		}
	}
	${below.large`
		display: ${({ open }) => (open ? "flex" : "none")};
		font: 24px ${FrauncesFont};
		color: ${MainColors.darkGreyBlue};
		margin-top: 5rem;
		padding-top: 4rem;
		position: absolute;
		right: 0;
		top: 0;
		flex-direction: column;
		background: rgb(255,255,255);
		background: linear-gradient(0deg, rgba(255,255,255,0.8242647400757178) 0%, rgba(255,255,255,1) 100%);
		width: 100%;
		height: 100vh;
		border-radius: 10px;
		text-align: center;
		transition: transform 0.3s ease-in-out;
		transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
		li {
			margin-bottom: 3rem;
		}
	`}
	li {
		display: inline;
		margin-right: 2rem;
		color: inherit;
	}
`;

const StyledHamburger = styled.div`
	display: none;
	width: 25%;
	position: absolute;
	top: 2.5rem;
	right: 1rem;
	span {
		display: block;
		width: 25px;
		height: 3px;
		margin: 0 0 5px 75%;
		background-color: #000;
	}
	${below.large`
		display: block;
		cursor: pointer;
		& :nth-child(1) {
			opacity: ${({ open }) => (open ? "0" : "1")};
			transform: ${({ open }) => (open ? "translateX(20px)" : "translateX(0)")};
		}
		& :nth-child(2) {
			transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
			margin-bottom: ${({ open }) => (open ? "-2px" : "5px")};
		}
		& :nth-child(3) {
				transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
	`}
`;

export default function Header() {
	const [open, setOpen] = useState(false);
	return (
		<NavBar>
			<Link href="/">
				<a className="NavBrand">
					<Image
						src="/assets/shared/desktop/logo.svg"
						width="237"
						height="27"
					></Image>
				</a>
			</Link>

			<NavList open={open}>
				<li className="NavListItem">
					<Link href="/">
						<a aria-current="page" href="#">
							Home
						</a>
					</Link>
				</li>
				<li className="NavListItem">
					<Link href="/about">
						<a href="#">About Us</a>
					</Link>
				</li>
				<li>
					<Link href="/createPlan">
						<a href="#">Create Your Plan</a>
					</Link>
				</li>
			</NavList>
			<StyledHamburger open={open} onClick={() => setOpen(!open)}>
				<span className="bar"></span>
				<span className="bar"></span>
				<span className="bar"></span>
			</StyledHamburger>
		</NavBar>
	);
}
