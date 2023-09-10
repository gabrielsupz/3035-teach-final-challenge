import { styled } from 'styled-components'

export const FormAccessStyled = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 600px;
  h2 {
    font-size: 40px;
    font-weight: 700;
  }

  div {
    transition: all 0.3s;
  }

  @media (max-width: 900px) {
    width: 400px;
  }

  @media (max-width: 600px) {
    width: 100%;
  }

  @media (max-width: 750px) {
    background-color: white;
    height: 400px;
    width: 340px;
    margin: auto;

    box-shadow: 0px 4px 21px -4px #00000066;
    border-radius: 8px;
  }
  @media (max-width: 340px) {
    width: 310px;
  }
`
export const FormBoxStyled = styled.div`
  display: flex;
  height: auto;
  width: 350px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 40px;
  position: relative;

  margin: 0;
  @media (max-width: 750px) {
    width: 300px;
  }
  @media (max-width: 340px) {
    width: 280px;
  }
`
