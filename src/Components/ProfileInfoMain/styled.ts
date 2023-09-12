import { styled } from 'styled-components'

export const ProfileInfoMainStyled = styled.main`
  display: flex;
  flex-direction: column;
  padding: 60px 60px 80px 60px;
  gap: 55px;
  h2 {
    font-size: 30px;
    font-weight: 700;
  }
  p {
    font-size: 13px;
    color: #2d2d2d;
  }

  h3 {
    font-size: 12px;
    color: var(--h3-text-color);
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
  img {
    width: 125px;
    border-radius: 4px;
  }

  h3 {
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
  padding: 40px 10px 0 10px;
  gap: 35px;
`
