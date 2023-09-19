import { styled, css } from 'styled-components'

interface HeaderProps {
  $isVisibleOnLargeScreens?: boolean
}

export const HeaderStyled = styled.header<HeaderProps>`
  ${({ $isVisibleOnLargeScreens }) =>
    $isVisibleOnLargeScreens
      ? css`
          display: flex;
        `
      : css`
          display: none;
        `};

  padding: 30px 65px 30px 65px;
  background-color: white;
  width: 100%;

  align-self: center;
  @media (max-width: 750px) {
    display: flex;
    padding: 20px 0 20px 0;
    justify-content: center;
    border-radius: 4px;
    box-shadow: 0px 4px 21px -4px #00000066;
  }

  @media (max-width: 340px) {
    padding-left: 0;
    padding-right: 0;
  }
`

export const LogoHeaderStyled = styled.img`
  height: 30px;
`
