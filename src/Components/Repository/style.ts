import { styled } from 'styled-components'

export const RepositoryStyled = styled.div`
  display: flex;
  flex-direction: column;

  // padding: 32px 40px 45px 40px;
  box-shadow: 0px 4px 21px -4px #00000066;

  h3 {
    margin: 32px 0 28px 40px;
    font-size: 15px;
    font-weight: 700;
    color: var(--repository-name-text-color);
  }

  & div:nth-child(2) {
    border-top: 1px solid #0070e0;
  }
  & div:nth-child(3) {
    padding-bottom: 40px;
  }
`

export const RepositoryDivStyled = styled.div`
  padding: 30px 42px 0 42px;
  width: 280px;

  h4 {
    display: flex;
    flex-direction: column;
    gap: 5px;
    font-size: 12px;
  }

  p {
    color: var(--repository-name-text-color);
    font-size: 14px;
    font-weight: 500;
  }
`
