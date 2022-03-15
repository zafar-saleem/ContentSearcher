import { Link } from '@chakra-ui/react';

export const CardHeader = (props) => {
	return (
		<Link
      my={1}
      display="block"
      fontSize="18px"
      lineHeight="normal"
      fontWeight="semibold"
      color="#000000"
      href="#"
    >
      {props.children}
    </Link>
	);
}