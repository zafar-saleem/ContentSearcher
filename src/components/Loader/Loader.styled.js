import styled from 'styled-components';

export const StyledLoader = styled.div`
	position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80px;
  height: 80px;
`;

export const StyledBar = styled.div`
	width: 10px;
  height: 70px;
  display: inline-block;
  transform-origin: bottom center;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  animation: loader 1.2s linear infinite;

  &.bar1 {
	  animation-delay: 0.1s;
	}

	&.bar2 {
	  animation-delay: 0.2s;
	}

	&.bar3 {
	  animation-delay: 0.3s;
	}

	&.bar4 {
	  animation-delay: 0.4s;
	}

	&.bar5 {
	  animation-delay: 0.5s;
	}

	&.bar6 {
	  animation-delay: 0.6s;
	}

	&.bar7 {
	  animation-delay: 0.7s;
	}

	&.bar8 {
	  animation-delay: 0.8s;
	}

	@keyframes loader {
	  0% {
	    transform: scaleY(0.1);
	    background: ;
	  }
	  50% {
	    transform: scaleY(1);
	    background: #ff8615;
	  }
	  100% {
	    transform: scaleY(0.1);
	    background: transparent;
	  }
	}
`;
