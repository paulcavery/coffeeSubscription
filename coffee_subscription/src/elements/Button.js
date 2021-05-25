import styled from "styled-components";
import {
	MainColors,
	ButtonColorHover,
	ButtonColorDisabled,
	FrauncesFont,
} from "../utilities";

export const ButtonOne = styled.button`
	color: #fff;
	font: 18px ${FrauncesFont};
	font-weight: 900;
	background-color: ${MainColors.darkCyan};
	width: 217px;
	height: 56px;
	border-radius: 6px;
	border: 1px solid ${MainColors.darkCyan};
	&:hover {
		background-color: ${ButtonColorHover};
	}
	&:disabled {
		background-color: ${ButtonColorDisabled};
	}
`;
