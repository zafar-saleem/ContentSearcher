import { Stack } from '@chakra-ui/react';
import React from 'react';
import {
	CardMedia,
	CardHeader,
	CardSubheader,
	CardExpert,
} from './components';

import { StyledBox } from './Card.styled';

const Card = (props) => {
  return (
		<StyledBox
    	pb={4}
      display={{ md: "flex" }}
      borderWidth={1}
      marginTop={2}
      borderRadius={5}
      border={0}
      bgColor="#FFFFFF"
    >
    	<Stack
        align={{ base: "center", md: "stretch" }}
        textAlign={{ base: "center", md: "left" }}
        ml={{ md: 6 }}
      >
    		{props.children}
    	</Stack>
    </StyledBox>
  );
};

Card.CardMedia = CardMedia;
Card.CardHeader = CardHeader;
Card.CardSubheader = CardSubheader;
Card.CardExpert = CardExpert;

export { Card };
