import React from 'react';
import { StyledLoader, StyledBar } from './Loader.styled';

export const Loader: React.FC = () => {
	return (
		<StyledLoader>
		  <StyledBar className="bar1"></StyledBar>
		  <StyledBar className="bar2"></StyledBar>
		  <StyledBar className="bar3"></StyledBar>
		  <StyledBar className="bar4"></StyledBar>
		  <StyledBar className="bar5"></StyledBar>
		  <StyledBar className="bar6"></StyledBar>
		  <StyledBar className="bar7"></StyledBar>
		  <StyledBar className="bar8"></StyledBar>
		</StyledLoader>
	);
}