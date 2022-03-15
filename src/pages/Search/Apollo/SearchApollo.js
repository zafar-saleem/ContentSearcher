import { useEffect, useState } from 'react';
import { useQuery, useLazyQuery } from '@apollo/react-hooks';
import { SearchContainer } from '../Container/';
import { GET_CONTENT_CARDS_QUERY } from './Queries/';

export const SearchApollo = () => {
	const [searchString, setSearchString] = useState('');
	let contents = useQuery(GET_CONTENT_CARDS_QUERY, {
		variables: {
			filter: {
				limit: 20,
				keywords: searchString,
				types: ['PODCAST'],
			}
		},
	});

	const [getSearchedContents, searchedContents] = useLazyQuery(GET_CONTENT_CARDS_QUERY, {
		variables: {
			filter: {
				limit: 20,
				keywords: searchString,
				types: ['PODCAST'],
			}
		},
	});

	useEffect(() => {
		console.log(searchString);
		if (searchString?.length > 0) {
			getSearchedContents();
		}
	}, [searchString]);

	useEffect(() => {
		console.log('SEARCHED: ', searchedContents.data); // Check here
	}, [searchedContents]);

	// Line 42 needs to be changed once search with GraphQL is fixed.
	return (
		<SearchContainer
			contents={contents ? contents?.data?.contentCards?.edges : searchedContents?.data?.contentCards?.edges}
			setSearch={setSearchString}
			loading={contents.loading}
		/>
	);
}
