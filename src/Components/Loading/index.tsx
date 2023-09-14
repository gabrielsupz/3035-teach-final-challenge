import * as S from './style'

export function Loading() {
  return (
    <S.LogoBoxStyled>
      <S.LoadingLogoStyled
        width="80"
        height="80"
        viewBox="0 0 80 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="40" cy="40" r="38.5" stroke="#0070E0" strokeWidth="3" />
        <circle
          cx="40"
          cy="40"
          r="20.5"
          stroke="#0070E0"
          strokeWidth="5"
          strokeLinecap="round"
          strokeDasharray="20 20"
        />
      </S.LoadingLogoStyled>

      <S.LoadingTextStyled>Carregando...</S.LoadingTextStyled>
    </S.LogoBoxStyled>
  )
}
