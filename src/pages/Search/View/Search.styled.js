import { Image } from '@chakra-ui/react';
import styled from 'styled-components';

export const Container = styled.div`
	height: 100vh;
	color: #ffffff;
	background-color: #001315;
`;

export const Wrapper = styled.div`
	position: relative;
	width: 90vw;
	margin: auto;
`;

export const StyledImage = styled(Image)`
	width: 100%;
`;

export const StyledName = styled.span`
	display: block;
	color: #333333;
	font-weight: 600;
`;

export const StyledCompany = styled.span`
	display: block;
	color: #FF8615;
	font-weight: 600;
`;

export const StyledTitle = styled.span`
	display: block;
	color: #333333;
	font-weight: 600;
	text-transform: uppercase;
`;