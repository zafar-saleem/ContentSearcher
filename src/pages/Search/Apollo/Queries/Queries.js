import { gql } from 'apollo-boost';

export const GET_CONTENT_CARDS_QUERY = gql`
	query GetContentCards($limit: Int, $keywords: String, $types: [ContentType!]) {
		contentCards(filter: { limit: $limit, keywords: $keywords, types: $types }) {
			edges {
				...on Podcast {
					name
					image {
						...Image
					}
					categories {
						...Category
					}
					experts {
						...Expert
					}
				}
			}
		}
	}

	fragment Image on Image {
		uri
	}
	fragment Category on Category {
		name
	}
	fragment Expert on Expert {
		firstName
		lastName
		title
		company
	}
`;
