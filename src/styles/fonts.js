import { createGlobalStyle } from 'styled-components'
import msBold from '../assets/fonts/montserrat/Montserrat-Bold.woff';
import msRegular from '../assets/fonts/montserrat/Montserrat-Regular.woff';

const FontStyles = createGlobalStyle`
  @font-face {
    font-family: 'Montserrat-Bold';
    font-style: normal;
    font-weight: bold;
    src: url(${msBold}) format('woff');
  }

  @font-face {
    font-family: 'Montserrat-Regular';
    font-style: normal;
    font-weight: normal;
    src: url(${msRegular}) format('woff');
  }
`
export default FontStyles