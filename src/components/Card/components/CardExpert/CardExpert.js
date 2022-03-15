import { Text } from '@chakra-ui/react';

export const CardExpert = (props) => {
	return (
		<Text my={2} fontSize="14px">
			{props.children}
    </Text>
	);
}