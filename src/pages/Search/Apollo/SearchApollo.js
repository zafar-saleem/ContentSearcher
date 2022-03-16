import { useEffect, useState } from 'react';
import { useQuery, useLazyQuery } from '@apollo/react-hooks';
import { SearchContainer } from '../Container/';
import { GET_CONTENT_CARDS_QUERY } from './Queries/';

export const SearchApollo = () => {
	const limit = 20;
	const types = ['PODCAST'];
	const [searchString, setSearchString] = useState('');
	const [getContents, contents] = useLazyQuery(GET_CONTENT_CARDS_QUERY);

	useEffect(() => {
		getContents({
			variables: {
				limit,
				keywords: searchString,
				types
			}
		});
	}, [searchString]);

	return (
		<SearchContainer
			contents={contents?.data?.contentCards?.edges}
			setSearch={setSearchString}
			loading={contents.loading}
		/>
	);
}
