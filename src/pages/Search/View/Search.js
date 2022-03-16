import {
	Container,
	Wrapper,
	StyledImage,
	StyledName,
	StyledCompany,
	StyledTitle,
} from './Search.styled';
import { SearchField, Card, Loader } from '../../../components/';

const AVATAR_URI = process.env.REACT_APP_AVATAR;

export const Search = ({
	contents,
	loading,
}) => {
	const handleImgError = (event, name) => {
		event.target.src = `${AVATAR_URI}?name=${name}&size=512&background=random`;
	}

	return (
		<Container>
			<Wrapper>
				{loading && <Loader />}
				<SearchField label="Search">
					<SearchField.SearchInput />
				</SearchField>
				{
					!loading && contents?.map((content, index) => (
						content.name && (
							<Card key={`${content.name}-${index}`}>
								<Card.CardMedia>
					        <StyledImage
					        	pt="0"
					        	maxHeight="400px"
					          src={content?.url}
					          alt={content?.url}
					          onError={(event) => handleImgError(event, content.name)}
					        />
								</Card.CardMedia>
								<Card.CardSubheader>
									{content?.categories?.[0].name}
								</Card.CardSubheader>
								<Card.CardHeader>
									{content?.name}
								</Card.CardHeader>
								<Card.CardExpert>
									<StyledName>
										{content?.experts[0]?.firstName} {content?.experts[0]?.lastName}
									</StyledName>
									<StyledTitle>
										{content?.experts?.[0]?.title}
									</StyledTitle>
									<StyledCompany>
										{content?.experts?.[0]?.company}
									</StyledCompany>
								</Card.CardExpert>
							</Card>
						)
					))
				}
      </Wrapper>
		</Container>
	);
}
