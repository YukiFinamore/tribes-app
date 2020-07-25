import styled from "styled-components";
import variables from '../../styles/variables'

export const FormContainer = styled.div`
  @media only screen and (min-device-width: 320px) and (max-device-width: 1024px) {
    display: block;
    padding: 0 20px;

    a {
      text-decoration: none;
    }
  }
`;

export const FormGroup = styled.div`
  @media only screen and (min-device-width: 320px) and (max-device-width: 1024px) {
    display: block;
    margin-bottom: 20px;
  }
`;

export const Label = styled.label`
  @media only screen and (min-device-width: 320px) and (max-device-width: 1024px) {
    color: ${variables.fontWhite};
    font-family: 'Montserrat-Bold';
    text-transform: uppercase;
    margin-bottom: 8px;
    display: block;
  }
`;

export const Input = styled.input`
  @media only screen and (min-device-width: 320px) and (max-device-width: 1024px) {
    padding: 10px 15px;
    font-family: 'Montserrat-Regular';
    color: ${variables.fontWhite};
    background: ${variables.bgInputGray};
    border: none;
    border-radius: 8px;
    width: 100%;
    height: 45px;
    border-bottom: solid ${variables.bgOrange} 2px;
    font-size: 12px;
  }
`;

export const PasswordInputContainer = styled.div`
  @media only screen and (min-device-width: 320px) and (max-device-width: 1024px) {
    position: relative;

    img {
      position: absolute;
      right: 15px;
      top: 10px;
    }
  }
`;

export const PasswordInput = styled(Input).attrs(props => ({
  type: "password",
}))`

  padding-right: 60px;
`;