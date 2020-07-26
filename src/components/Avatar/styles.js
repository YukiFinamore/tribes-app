import styled from 'styled-components'

export const Container = styled.div`
  @media only screen and (min-device-width: 320px) and (max-device-width: 1024px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 250px;
    height: 250px;
    border-radius: 100px;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
    }
  }
`
