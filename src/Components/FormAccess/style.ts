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
  width: 300px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 40px;

  margin: 0;

  @media (max-width: 340px) {
    width: 280px;
  }
`

export const LabelAndInputStyled = styled.label`
  display: flex;
  gap: 10px;
  flex-direction: column;
  font-size: 15px;
  width: 100%;

  input {
    border: 1px solid var(--input-border-and-placeholder-color);
    border-radius: 3px;
    padding: 10px 15px 10px 15px;
    transition: all 0.3s;
    font-weight: 400;
    color: var(--text-color);
  }

  input:focus {
    border: 1px solid var(--blue-color);
    box-shadow: 0 0 0 0;
    outline: 0;
    box-shadow: 4px 4px 0px 0px var(--input-shadow-focus-color);
    transition: all 0.3s;
  }
  input::placeholder {
    color: var(--input-border-and-placeholder-color);
  }
`

export const ButtonSubmitFormStyled = styled.button`
  font-size: 15px;
  font-weight: 700;
  color: white;
  background-color: var(--blue-color);
  border: none;
  border-radius: 5px;
  width: 100%;
  height: 50px;
  transition: all 0.3s;
  &:hover {
    background-color: var(--blue-button-hover);
  }
`
