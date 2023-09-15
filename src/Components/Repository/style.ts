import { css, styled } from 'styled-components'

interface RepositoryStyleProps {
  isShowDatails: boolean
}

export const RepositoryStyled = styled.div<RepositoryStyleProps>`
  ${({ isShowDatails }) =>
    isShowDatails
      ? css`
          width: 680px;
          gap: 25px;
          padding: 0 50px 60px 50px;

          justify-content: center;

          & div:nth-child(2) {
            padding-top: 20px;
            border-top: 1px solid #bdbdbd;
          }

          h3 {
            margin-top: 40px;
          }

          @media (max-width: 400px) {
            padding: 15px 15px 50px 15px;
            align-items: center;
          }
          @media (max-width: 330px) {
            padding: 15px 10px 50px 10px;
          }
        `
      : css`
          & div:nth-child(3) {
            padding-bottom: 40px;
          }

          & div:nth-child(2) {
            border-top: 1px solid #0070e0;
          }

          h3 {
            margin: 32px 0 28px 40px;
          }
        `}

  display: flex;
  flex-direction: column;

  box-shadow: 0px 4px 21px -4px #00000066;

  h3 {
    font-size: 15px;
    font-weight: 700;
    color: var(--repository-name-text-color);
  }

  @media (max-width: 750px) {
    width: 300px;
  }
`

export const RepositoryDivStyled = styled.div<RepositoryStyleProps>`
  ${({ isShowDatails }) =>
    isShowDatails
      ? css`
          width: 100%;
        `
      : css`
          padding: 30px 42px 0 42px;
          width: 280px;

          @media (max-width: 750px) {
            padding: 10px;
          }
        `}

  h4 {
    display: flex;
    flex-direction: column;
    gap: 5px;
    font-size: 12px;
    background-color: #f7f7f7;
    padding: 11px 11px 11px 15px;
    text-align: justify;
    border-radius: 11px;
  }

  p {
    color: var(--repository-name-text-color);
    font-size: 13px;
    font-weight: 500;
  }
`
