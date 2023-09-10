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
  cursor: pointer;
`

export const AlertBox = styled.div`
  position: absolute;
  top: -40px;
  display: none;
  &.active {
    display: flex;
  }
  transition: all 0.3s;
  align-items: center;
  justify-content: space-between;
  padding: 5px 18px 0 10px;
  width: 350px;
  height: 85px;
  border-radius: 22px;
  background-color: var(--alert-background-color);
  color: white;
`

export const AlertMessage = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 10px;
  h2 {
    font-size: 20px;
    font-weight: 700;
  }

  p {
    font-size: 12px;
  }
`
export const AlertBalls = styled.div`
  width: 56px;
  height: 100%;
  position: relative;

  & button:first-child {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    width: max-content;
    height: max-content;
    padding: 0;
    border: 0;
    background: local;
    position: absolute;

    top: -30px;
    left: 11px;
  }

  & svg:nth-child(2) {
    position: absolute;
    left: 0;
    bottom: 45%;
  }
  & svg:nth-child(3) {
    position: absolute;
    right: 0;
    bottom: 35%;
  }
  & svg:nth-child(4) {
    position: absolute;
    left: 17px;
    bottom: 13%;
  }
`

export const CloseButton = styled.button`
  position: absolute;
  top: -10px;
  right: 0;
  display: flex;
  border: none;
  background: local;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: 5px;
  transition: all 0.5s;
  &:hover {
    border-radius: 10px;
    background-color: #c24914;
    transition: all 0.5s;
  }
`
