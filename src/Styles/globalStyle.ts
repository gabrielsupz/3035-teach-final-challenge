import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'
export const GlobalStyle = createGlobalStyle`

${reset}

:root{
  font-family: 'Montserrat', sans-serif;
  box-sizing:border-box;  
  --text-color:#303030;
  --blue-color: #05478A;
  --blue-button-hover:#5451bd; 
  --input-border-and-placeholder-color: #B5B5B5;
  --background-light-gray: #F7F7F7;
  --input-shadow-focus-color: #0b2447;
--background-pages:#ECEFF5;
--alert-background-color: #FC8621;

  color: var(--text-color);
}




`
