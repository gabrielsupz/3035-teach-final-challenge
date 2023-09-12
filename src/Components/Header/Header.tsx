import * as S from './style'

interface HeaderProps {
  isVisibleInDesktop: boolean
}

export function Header({ isVisibleInDesktop }: HeaderProps) {
  return (
    <S.HeaderStyled isVisibleInDesktop={isVisibleInDesktop}>
      <S.LogoHeaderStyled src="/logo-blue.svg" alt="Logo do Site" />
    </S.HeaderStyled>
  )
}
