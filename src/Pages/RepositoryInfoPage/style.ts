import { styled } from 'styled-components'

export const RepositoryInfoPageStyled = styled.div`
  background-color: var(--background-page);
  display: flex;
  flex-direction: column;
  gap: 32px;
  overflow: hidden;
  padding: 0 50px 42px 50px;
  height: 100%;
  max-width: 1440px;

  @media (max-width: 750px) {
    padding: 0 20px;
  }

  h2 {
    font-size: 30px;
    font-weight: 700;
  }
`
