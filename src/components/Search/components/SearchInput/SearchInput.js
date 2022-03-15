import { Input } from '@chakra-ui/react';
import { debounce } from 'lodash';
import { TRIGGER_SEARCH } from '../../../../Configs/';

export const SearchInput = () => {

	const handleChange = (event) => {
		debouncedSearch(event.target.value);
	};

	const debouncedSearch = debounce((searchString) => {
		window.ContentSearcherApp.events.dispatch(TRIGGER_SEARCH, { searchString });
	}, 300);

	return (
		<Input
			onChange={handleChange}
	    placeholder="Type any keyword"
	    size="sm"
	    bgColor="#003238"
	    borderColor="#003238"
	    borderRadius="5px"
	  />
	);
}
