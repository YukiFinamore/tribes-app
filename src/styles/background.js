import styled from 'styled-components'
import loginBg from '../assets/images/bg/login-bg.png'

export const Background = styled.div`
  @media only screen and (min-device-width: 320px) and (max-device-width: 1024px) {
    background-repeat: no-repeat;
    background-size: cover;
    position: absolute;
    height: 100%;
    width: 100%;
  }
`;

export const LoginBg = styled(Background)`
  @media only screen and (min-device-width: 320px) and (max-device-width: 1024px) {
    background-image: url(${loginBg});
  }
`;