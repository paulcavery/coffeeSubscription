import styled from "styled-components";

import { ButtonOne } from "../../../src/elements/Button";
import { MainColors, BarlowFont, FrauncesFont } from "../../../src/utilities";

export const Modal = ({ open, setOpen }) => {
	return (
		<StyledModal open={open} onClick={() => setOpen(!open)}>
			<ModalContent>
				<ModalHead>
					<h1>Order Summary</h1>
				</ModalHead>
				<ModalText>
					<p>
						“I drink my coffee as <span>Filter</span>, with a{" "}
						<span>Decaf </span>
						type of bean. <span>250g </span>
						ground ala
						<span> Cafetiere </span>, sent to me <span>Every Week</span>.”
					</p>
					<p className="preCheckText">
						Is this correct? You can proceed to checkout or go back to plan
						selection if something is off. Subscription discount codes can also
						be redeemed at the checkout.
					</p>
				</ModalText>
				<ModalFooter>
					<h2>$14.00/mo</h2>
					<ButtonOne>Checkout</ButtonOne>
				</ModalFooter>
			</ModalContent>
		</StyledModal>
	);
};
const StyledModal = styled.div`
	position: fixed;
	display: ${({ open }) => (open ? "block" : "none")};
	background: rgba(0, 0, 0, 0.5);
	height: 100%;
	width: 100%;
	z-index: 999;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
`;

const ModalContent = styled.section`
	width: 540px;
	height: 597px;
	background: #fff;
	margin: 5% auto;
	border-radius: 6px;
`;
const ModalHead = styled.section`
	background: ${MainColors.darkGreyBlue};
	color: #fff;
	font: 40px ${FrauncesFont};
	width: 100%;
	height: 136px;
	padding: 7.5% 4rem 5% 4rem;
	margin-bottom: 2rem;
	border-top-left-radius: 6px;
	border-top-right-radius: 6px;
`;
const ModalText = styled.section`
	display: block;
	color: ${MainColors.grey};
	padding: 5% 4rem 5% 4rem;
	p:nth-child(1) {
		font: 24px ${FrauncesFont};
	}
	p:nth-child(2) {
		font: 16px ${BarlowFont};
	}
	span {
		color: ${MainColors.darkCyan};
	}
`;
const ModalFooter = styled.section`
	display: inline-flex;
	padding: 7.5% 0 5% 4rem;
	h2 {
		padding-right: 1rem;
		font: 32px ${FrauncesFont};
	}
`;
