import styled from 'styled-components'
import variables from '../../styles/variables'

export const LogoContainer = styled.div`
	@media only screen and (min-device-width: 320px) and (max-device-width: 1024px) {
	  align-items: center;
		display: flex;
	  justify-content: center;
	  padding: 0 50px;
	  margin: 70px 0;
	}
`;

export const FooterText = styled.div`
	@media only screen and (min-device-width: 320px) and (max-device-width: 1024px) {
	  padding: 0 20px;
	  display: flex;
	  justify-content: center;
	  position: absolute;
	  bottom: 20px;
	  width: 100%;

	  p,
	  a {
	  	color: ${variables.fontWhite};
	  	font-size: 16px;
	  }

	  a {
	  	margin-left: 7px;
	  }
	}
`;