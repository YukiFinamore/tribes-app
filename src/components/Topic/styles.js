import styled from 'styled-components'
import variables from '../../styles/variables'

export const Container = styled.div`
  @media only screen and (min-device-width: 320px) and (max-device-width: 1024px) {
    display: flex;
    width: 100%;
    border-radius: 20px;
    position: relative;
    background: ${variables.bgTopic};
    margin-bottom: 10px;
    padding: 20px 0;
  }
`;

export const TopicInfos = styled.div`
  @media only screen and (min-device-width: 320px) and (max-device-width: 1024px) {
    width: 80%;
    position: relative;
    padding: 0 20px;
    display: flex;
    flex-direction: column;

    h2,
    p {
      font-family: Montserrat-Regular;
    }

    h2 {
      color: ${variables.fontWhite};
      font-size: 16px;
      margin-bottom: 10px;
    }

    p {
      color: ${variables.fontGray};
      border-bottom: solid rgba(255, 255, 255, .5) 1px;
      padding-bottom: 15px;
      font-size: 12px;
    }
  }
`;

export const CommentsContainer = styled.div`
  @media only screen and (min-device-width: 320px) and (max-device-width: 1024px) {
    position: relative;
    display: flex;
    align-items: center;
    width: 20%;
    margin-top: 15px;

    img {
      width: auto;
      height: auto;
    }

    p {
      color: ${variables.fontWhite};
      margin: 0 0 0 10px;
      padding-bottom: 0;
      font-size: 12px;
      border: none;
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

export const AvatarDefault = styled.div`
  @media only screen and (min-device-width: 320px) and (max-device-width: 1024px) {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 54px !important;
    border-radius: 100px;
    overflow: hidden;
    background: ${variables.bgPurple};

    p {
      text-align: center;
      text-transform: uppercase;
      font-size: 14px;
      letter-spacing: 2px;
      margin-top: 0;
    }
  }
`; 