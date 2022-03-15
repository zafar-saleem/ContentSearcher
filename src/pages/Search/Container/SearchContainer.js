import { useEffect, useState } from 'react';
import { TRIGGER_SEARCH } from '../../../Configs/';
import { Search } from '../View/';

export const SearchContainer = ({
	contents,
	setSearch,
	loading,
}) => {
	const [data, setData] = useState([]);

	useEffect(() => {
		setData((prev) => contents?.map(content => {
			if (content.hasOwnProperty('image')) {
				return Object.assign({}, content, {url: addStr(content.image.uri)});
			}
		}).filter(Boolean));
	}, [contents]);

	useEffect(() => {
		window.ContentSearcherApp.events.listen(TRIGGER_SEARCH, handleChange);
	}, []);

	const addStr = (url) => {
		if (url.includes('io')) {
			return url.replace('io', 'io/resize/250x');
		}

		if (url.includes('com')) {
			return url.replace('com', 'com/resize/250x');
		}
	}

	const handleChange = ({ searchString }) => {
		setSearch(searchString);
	};

	return (
		<Search
			contents={data}
			loading={loading}
		/>
	);
}