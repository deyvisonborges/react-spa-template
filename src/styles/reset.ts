import { createGlobalStyle } from 'styled-components'

export const ResetCSS = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  html, body {
    height: 100%;
    overflow: hidden;
  }
  body {
    font-size: 1rem;
    line-height: 1.5;
    position: relative;
    max-height: 100vh;

    @supports (-webkit-touch-callout: none) {
      max-height: -webkit-fill-available;
    }
  }

`
