import React from "react";
import styled from "styled-components";
import { below } from "../utilities";

const AppWrapper = ({ className, children }) => {
	return <div className={className}>{children}</div>;
};

export default styled(AppWrapper)`
	min-height: 100vh; /* will cover the 100% of viewport */
	overflow: hidden;
	display: block;
	position: relative;
	padding-bottom: 120px;
	${below.large`
        padding-bottom: 270px;
    `}
	${below.small`
        padding-bottom: 346px;
    `}
`;
