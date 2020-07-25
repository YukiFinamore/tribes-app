import styled from 'styled-components'
import variables from '../../styles/variables'

export const Container = styled.div`
	@media only screen and (min-device-width: 320px) and (max-device-width: 1024px) {
	  align-items: center;
		display: flex;
	  justify-content: center;
	  flex-direction: column;
	  padding: 40px 20px;

	  p {
	  	margin: 35px 0 5px;
	  	color: ${variables.fontWhite};
	  	font-family: 'Montserrat-Regular';
	  	font-size: 18px;
	  }
	}
`;

export const AvatarContainer = styled.div`
	@media only screen and (min-device-width: 320px) and (max-device-width: 1024px) {
	  position: relative;
	}
`;

export const CamIcon = styled.div`
	@media only screen and (min-device-width: 320px) and (max-device-width: 1024px) {
	  position: absolute;
	  bottom: 0px;
	  right: 10px;
	  border-radius: 50px;
	  overflow: hidden;
  	background: ${variables.bgScrollPink};
  	padding: 15px;
	}
`;

export const TopicsList = styled.div`
	@media only screen and (min-device-width: 320px) and (max-device-width: 1024px) {
	  align-items: space-between;
		display: flex;
	  justify-content: space-between;
	  flex-direction: column;
	  width: 100%;
	  height: 300px;
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

export const ListItemContainer = styled.div`
	@media only screen and (min-device-width: 320px) and (max-device-width: 1024px) {
	  align-items: center;
		display: flex;
	  justify-content: space-between;
	  background: ${variables.bgInputGray};
	  padding: 10px;
	  border-radius: 10px;
	  margin-bottom: 5px;

	  p {
	  	margin-top: 0;
	  }

	  img {
	  	border-radius: 20px;
	  }
	}
`;