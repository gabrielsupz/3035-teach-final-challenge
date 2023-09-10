import { styled } from 'styled-components'

export const AsideStyled = styled.aside`
  display: flex;
  background-color: var(--blue-color);
  height: 100%;
  align-items: center;
  justify-content: center;

  @media (max-width: 750px) {
    display: none;
  }
`
export const LogoSvgStyled = styled.img`
  height: 55px;
`
