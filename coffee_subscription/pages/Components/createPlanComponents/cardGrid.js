import styled from "styled-components";

const CardGrid = styled.div`
	display: ${({ open, isOpen }) => (open === isOpen ? "grid" : "none")};
	width: 75%;
	margin: auto;
	grid-template-columns: 1fr 1fr 1fr;
	column-gap: 1rem;
`;
export const GridWrapper = ({ open, isOpen, children }) => {
	return (
		<CardGrid open={open} isOpen={isOpen}>
			{children}
		</CardGrid>
	);
};
const Card = ({ CardTitle, content }) => {
	return (
		<StyledCard>
			<h1>{CardTitle}</h1>
			<p>{content}</p>
		</StyledCard>
	);
};

const StyledCard = styled.div`
	display: block;
	text-align: left;
	height: 250px;
	width: 300px;
	border-radius: 6px;
	color: #000;
	background-color: #f4f1eb;
	padding: 2.5rem;
	&:hover {
		background-color: #fdd6ba;
	}
	h1 {
		font: 24px ${FrauncesFont};
		padding-bottom: 2rem;
	}
	p {
		font: 16px ${BarlowFont};
	}
`;
export default Card;
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
