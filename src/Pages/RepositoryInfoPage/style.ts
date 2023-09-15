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

  @media (max-width: 450px) {
    padding: 0%;
    background-color: white;
  }

  h2 {
    font-size: 30px;
    font-weight: 700;
  }
`

export const RepositoryInfoMainStyled = styled.main`
  background-color: white;
  padding: 50px 50px 120px 50px;
  display: flex;
  flex-direction: column;
  gap: 50px;
  border-radius: 10px;
  box-shadow: 0px 4px 21px -4px #00000066;
  @media (max-width: 700px) {
    padding: 40px 10px 50px 10px;
  }

  @media (max-width: 450px) {
    align-items: center;
  }
`
export const RepositoryDetailsShowBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`
