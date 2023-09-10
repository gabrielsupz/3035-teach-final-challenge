import { styled } from 'styled-components'

export const AccessPage = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  height: 100vh;
  width: 100vw;

  @media (max-width: 750px) {
    grid-template-columns: auto;
    grid-template-rows: auto 1fr;
    background-color: var(--background-pages);
  }
`
