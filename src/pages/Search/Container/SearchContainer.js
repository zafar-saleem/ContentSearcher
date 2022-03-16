import { useEffect, useState } from 'react';
import { TRIGGER_SEARCH } from '../../../Configs/';
import { Search } from '../View/';

export const SearchContainer = ({
	contents,
	setSearch,
	loading,
}) => {
	const { Events } = window.ContentSearcherApp;
	const [data, setData] = useState([]);

	useEffect(() => {
		setData((prev) => manipulateData(contents));
	}, [contents]);

	useEffect(() => {
		Events.listen(TRIGGER_SEARCH, handleChange);

		return () => Events.destroy(TRIGGER_SEARCH);
	}, []);

	const manipulateData = (data) => {
		return data?.map(content => {
			if (content.hasOwnProperty('image')) {
				return Object.assign({}, content, {url: addStr(content.image.uri)});
			}
			return null;
		}).filter(Boolean);
	}

	const addStr = (url) => {
		return url.replace(/(https?:\/\/.*?)\//, '$1/resize/250x/');
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