import { FormLabel } from '@chakra-ui/react';
import { SearchInput } from './components/';

const SearchField = ({ label, children }) => (
	<>
		<FormLabel
			mb=".50rem"
			pt="1rem"
			fontSize="14px"
			fontWeight="700"
		>
			{label}
		</FormLabel>
		{children}
  </>
);

SearchField.SearchInput = SearchInput;

export { SearchField };
