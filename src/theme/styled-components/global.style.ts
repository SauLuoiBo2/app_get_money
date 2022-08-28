import { createGlobalStyle } from "styled-components";

import { ThemeStyledType } from "./theme";
// import { IMG_CONFIG } from 'src/assets/config/imgConfig';

type Props = {
    theme: ThemeStyledType;
};

export const GlobalStyle = createGlobalStyle<Props>`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: transparent;
    transition: all .2s linear;
  }
  *:focus {
  outline: 0;
  outline: none;
  }
  html {
    font-size: 62.5%;
    background-color: ${({ theme }) => theme.colors.background.default} !important;
    box-sizing: border-box;

    /* color */

  }
  body {
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 1.6;
    text-decoration: none;
    background-color: ${({ theme }) => theme.colors.background.default} !important;
    color: ${({ theme }) => theme.colors.text.main} !important;
    transition: all .2s linear;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
    border: none;
    a:-webkit-any-link {
    /* color: black; */
    cursor: pointer;
    text-decoration: none;
    }
    /* fill input */
    input:-webkit-autofill,
    input:-webkit-autofill:hover,
    input:-webkit-autofill:focus,
    input:-webkit-autofill:active {
    transition: background-color 5000s ease-in-out 0s;
    }
    input:-webkit-autofill{
    -webkit-text-fill-color: var(--color-main) !important;
    }
}
`;
