import styled from 'styled-components'
import variables from '../../styles/variables'

export const Container = styled.div`
  @media only screen and (min-device-width: 320px) and (max-device-width: 1024px) {
    display: flex;
    width: 100%;
    border-radius: 20px;
    position: relative;
    height: 160px;
    margin-bottom: 10px;
  }
`;

export const TopicBg = styled.div`
  @media only screen and (min-device-width: 320px) and (max-device-width: 1024px) {
    position: absolute;
    width: 100%;
    height: 100%;
    overflow: hidden;
    border-radius: 20px;

    img {
      width: 100%;
      height: auto;
    }
  }
`;

export const TopicInfos = styled.div`
  @media only screen and (min-device-width: 320px) and (max-device-width: 1024px) {
    width: 80%;
    position: relative;
    margin-top: 75px;
    padding: 0 20px;

    h2 {
      color: ${variables.fontWhite};
      font-family: Montserrat-Regular;
      font-size: 16px;
      border-bottom: solid rgba(255, 255, 255, .5) 1px;
      padding-bottom: 15px;
    }
  }
`;

export const CommentsContainer = styled.div`
  @media only screen and (min-device-width: 320px) and (max-device-width: 1024px) {
    position: relative;
    display: flex;
    width: 20%;
    margin-top: 20px;

    img {
      width: auto;
      height: 100%;
    }

    p {
      color: ${variables.fontWhite};
      margin-left: 10px;
      font-size: 12px;
    }
  }
`;

export const TopicAuthor = styled.div`
  @media only screen and (min-device-width: 320px) and (max-device-width: 1024px) {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    width: 20%;
    padding-right: 20px;
    margin-bottom: 20px;

    div {
      width: 100%;
      height: auto;
    }

    img {
      width: 100%;
      height: auto;
      position: relative;
    }

    p {
      color: ${variables.fontWhite};
      text-align: center;
      font-size: 10px;
      margin-top: 5px;
    }
  }
`;