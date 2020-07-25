import { createGlobalStyle } from 'styled-components'
import FontStyles from './fonts'

const GeneralStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  html, body, #root {
    height: 100%;
    overflow: hidden;
    font-family: Montserrat-Regular;
  }

  body {
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
    height: 100%;
  }
`

export default GeneralStyles