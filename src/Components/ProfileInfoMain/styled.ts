import { styled } from 'styled-components'
import { Colors } from '.'

export const ProfileInfoMainStyled = styled.main`
  display: flex;
  flex-direction: column;
  background-color: white;
  padding: 60px 60px 80px 60px;
  gap: 55px;
  box-shadow: 0px 4px 21px -4px #00000066;
  border-radius: 10px;

  @media (max-width: 750px) {
    padding: 40px 10px 30px 10px;

    h2 {
      width: 100%;
      text-align: center;
    }
  }

  h2 {
    font-size: 30px;
    font-weight: 700;
  }

  p {
    font-size: 13px;
    color: #2d2d2d;
  }

  h4 {
    font-size: 12px;
    color: var(--light-text-color);
  }
  strong {
    color: #2d2d2d;
    font-weight: 700;
    font-size: 13px;
  }
`

export const InfoProfileStyled = styled.div`
  border: 1.5px solid #e3e7eb;
  border-radius: 18px;
  max-width: 675px;
  padding: 26px 37px 26px 30px;
  display: flex;
  gap: 43px;

  @media (max-width: 750px) {
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }

  img {
    width: 125px;
    border-radius: 4px;
  }

  h4 {
    display: flex;
    flex-direction: column;
    gap: 9px;
  }
`
export const NameAndBioStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

export const RepositorysBoxStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 40px 10px 0 10px;
  width: 100%;
  justify-content: space-around;
  row-gap: 40px;

  @media (max-width: 750px) {
    justify-content: space-around;
    padding: 0;
    padding-top: 20px;
    align-items: center;
  }

  div:nth-child(1) {
    animation-delay: 0.2s;
  }
  div:nth-child(2) {
    animation-delay: 0.4s;
  }
  div:nth-child(3) {
    animation-delay: 0.6s;
  }
`
export const SectionRepositoryStyled = styled.div`
  display: flex;
  width: 100%;

  flex-direction: column;

  @media (max-width: 750px) {
    h2 {
      margin-bottom: 15px;
    }
  }
`

export const PageAndPageButtonsBoxStyled = styled.div`
  display: flex;
  gap: 15px;
  width: 100%;
  justify-content: end;
  align-items: center;
  div {
    display: flex;
    gap: 5px;
  }
`
export const PageButtonStyled = styled.button<Colors>`
  transition: all 0.5s;
  width: 26px;
  height: 26px;
  border-radius: 8px;
  border: 1px solid ${({ color }) => color};
  background-color: white;
`
