import { styled, keyframes } from 'styled-components'

const AnimationLoading = keyframes`
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
`

export const LoadingLogoStyled = styled.svg`
  width: 80px;
  height: 80px;

  animation: ${AnimationLoading} 1s infinite;
`

export const LoadingTextStyled = styled.h3`
  font-size: 30px;
  font-weight: 700;
`
