import { Text } from '@chakra-ui/react';

export const CardSubheader = (props) => {
	return (
		<Text
      fontWeight="bold"
      textTransform="uppercase"
      fontSize="12px"
      letterSpacing="wide"
      color="#FF8615"
    >
      {props.children}
    </Text>
	);
}