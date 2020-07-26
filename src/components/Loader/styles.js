import styled from 'styled-components'

export const Container = styled.div`
  @media only screen and (min-device-width: 320px) and (max-device-width: 1024px) {
    background: rgba(0, 0, 0, .6);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;

    img {
      width: 15%;
    }
  }
`