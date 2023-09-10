import * as S from './style'

export function FormAccess() {
  return (
    <S.FormAccessStyled>
      <S.FormBoxStyled>
        <h2>Entrar</h2>
        <S.LabelAndInputStyled id="userSearch">
          Usuário
          <input
            name="search"
            type="text"
            placeholder="Digite aqui seu usuário do Github"
          />
        </S.LabelAndInputStyled>
        <S.ButtonSubmitFormStyled>Entrar</S.ButtonSubmitFormStyled>
      </S.FormBoxStyled>
    </S.FormAccessStyled>
  )
}
