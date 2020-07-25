import styled from 'styled-components'
import variables from '../../styles/variables'

export const Container = styled.header`
  @media only screen and (min-device-width: 320px) and (max-device-width: 1024px) {
    background: linear-gradient(118.74deg, #CB28E5 -8.84%, #E55858 106.45%);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    flex: 0 0 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    padding: 25px 20px;
    width: 100%;

    p {
      color: ${variables.fontWhite};
      font-family: 'Montserrat-Bold';
      font-size: 19px;
    }
  }
`
