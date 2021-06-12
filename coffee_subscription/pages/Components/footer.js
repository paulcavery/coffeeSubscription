import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";
import { MainColors, below, BarlowFont } from "../../src/utilities";

const Footer = ({ className }) => {
	return (
		<footer className={className}>
			<Link href="/">
				<a>
					<Image
						className="NavBrandLink"
						src="/assets/shared/desktop/logo-footer.svg"
						width="237"
						height="27"
					></Image>
				</a>
			</Link>
			<ul className="NavList">
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
				<li className="NavListItem">
					<Link href="/createPlan">
						<a href="#">Create Your Plan</a>
					</Link>
				</li>
			</ul>
			<ul className="SocialList">
				<li className="SocialLinks">
					<Link href="https://www.facebook.com">
						<Image
							className="NavBrandLink"
							src="/assets/shared/desktop/icon-facebook.svg"
							width="24"
							height="24"
						></Image>
					</Link>
				</li>
				<li className="SocialLinks">
					<Link href="https://www.twitter.com">
						<Image
							className="NavBrandLink"
							src="/assets/shared/desktop/icon-twitter.svg"
							width="24"
							height="20"
						></Image>
					</Link>
				</li>
				<li className="SocialLinks">
					<Link href="https://www.instagram.com">
						<Image
							className="NavBrandLink"
							src="/assets/shared/desktop/icon-instagram.svg"
							width="24"
							height="24"
						></Image>
					</Link>
				</li>
			</ul>
		</footer>
	);
};

export default styled(Footer)`
	position: absolute;
	bottom: 0;
	left: 5%;
	background: ${MainColors.darkGreyBlue};
	color: #fff;
	padding: 45px 5%;
	width: 90%;
	height: 120px;
	line-height: 100px;
	font: 700 12px ${BarlowFont};

	.NavList {
		vertical-align: middle;
		display: inline-block;
		list-style-type: none;
		margin-left: 3rem;
	}
	.NavListItem {
		display: inline;
		margin-right: 2rem;
	}
	a {
		& :hover {
			color: ${MainColors.grey};
		}
	}
	.SocialList {
		margin-left: 35%;
		display: inline-block;
		list-style-type: none;
	}
	.SocialLinks {
		display: inline;
		margin-right: 1rem;
	}
	${below.large`
	    padding-top: 2rem;
		line-height: 3.5rem;
		text-align: center;
		height: 270px;
		.NavList {
			display: block;
			margin: 0;
		}
		.SocialList {
			padding-top: 4rem;
			display: block;
			margin: 0;
		}
	`}
	${below.small`
	    padding-top: 2rem;
		line-height: 2.5rem;
		text-align: center;
		height: 346px;
		.NavListItem {
			display: block;
			margin: ;
		}
		.SocialList {
			display: block;
			margin: 0;
		}
	`}
`;
