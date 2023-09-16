import * as S from './style'

interface HeaderProps {
  isVisibleOnLargeScreens: boolean
}

export function Header({ isVisibleOnLargeScreens }: HeaderProps) {
  return (
    <S.HeaderStyled isVisibleOnLargeScreens={isVisibleOnLargeScreens}>
      <S.LogoHeaderStyled src="/logo-blue.svg" alt="Logo do Site" />
    </S.HeaderStyled>
  )
}
