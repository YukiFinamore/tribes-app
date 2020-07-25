import styled from 'styled-components'
import variables from '../../styles/variables'

export const Wrapper = styled.div`
	@media only screen and (min-device-width: 320px) and (max-device-width: 1024px) {
	  background: ${variables.bgGray};
	  height: 100%;
	}
`;

export const Container = styled.div`
	@media only screen and (min-device-width: 320px) and (max-device-width: 1024px) {
		display: flex;
	  flex-direction: column;
	  padding: 20px;
	  width: 100%;
	}
`;

export const TopicContainer = styled.div`
	@media only screen and (min-device-width: 320px) and (max-device-width: 1024px) {
		display: flex;
	  justify-content: space-between;
	  flex-direction: column;
	  width: 100%;
	  height: 700px;
	  overflow: hidden;
	  overflow-y: visible;

	  ::-webkit-scrollbar {
	    width: 5px;
	    height: 0px;
	  }

	  ::-webkit-scrollbar-track {
	    background: ${variables.bgScrollGray};
	    border-radius: 10px;
	  }

	  ::-webkit-scrollbar-thumb {
	    background: ${variables.bgScrollPink};
	  }

	  ::-webkit-scrollbar-thumb:hover {
	    background: #555;
	  }
	}
`;