import styled from "styled-components";
import React from "react";
import Image from "next/image";
import { FrauncesFont, MainColors } from "../../../src/utilities";

export const CardGridHeader = ({ setOpen, isOpen, open, title }) => {
	return (
		<StyledCardGridHeader open={open} isOpen={isOpen}>
			<h3>
				{title}
				<span>
					<Image
						src="/assets/plan/desktop/icon-arrow.svg"
						onClick={() => setOpen(open)}
						width="19px"
						height="13px"
					></Image>
				</span>
			</h3>
		</StyledCardGridHeader>
	);
};

const StyledCardGridHeader = styled.section`
	position: relative;
	font: 40px ${FrauncesFont};
	color: ${MainColors.grey};
	width: 75%;
	margin: 7rem 0 3rem 12.5%;
	span {
		position: absolute;
		right: 7.5%;
		transform: ${({ open, isOpen }) =>
			open === isOpen ? "rotate(180deg)" : "rotate(0)"};
	}
`;
