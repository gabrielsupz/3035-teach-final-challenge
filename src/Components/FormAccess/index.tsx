import * as S from './style'

export function FormAccess() {
  const handleSubmitButton = () => {
    const AlertBox = document.querySelector('#AlertBox')

    AlertBox?.classList.add('active')
  }

  const handleCloseAlertButton = () => {
    const AlertBox = document.querySelector('#AlertBox')

    AlertBox?.classList.remove('active')
  }

  return (
    <S.FormAccessStyled>
      <S.FormBoxStyled>
        <h2>Entrar</h2>
        <S.AlertBox id="AlertBox">
          <S.AlertBalls>
            <button onClick={() => handleCloseAlertButton()}>
              <svg
                width="50"
                height="50"
                viewBox="0 0 50 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="25" cy="25" r="25" fill="#C24914" />
                <path
                  d="M20 20L30 30"
                  stroke="white"
                  stroke-width="3"
                  stroke-linecap="round"
                />
                <path
                  d="M30 20L20 30"
                  stroke="white"
                  stroke-width="3"
                  stroke-linecap="round"
                />
              </svg>
            </button>
            <svg
              width="6"
              height="6"
              viewBox="0 0 6 6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="3"
                cy="3"
                r="3"
                transform="matrix(1 0 0 -1 0 6)"
                fill="#C24914"
              />
            </svg>

            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="9.99927" cy="10" r="10" fill="#C24914" />
            </svg>
            <svg
              width="10"
              height="10"
              viewBox="0 0 10 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="5" cy="5" r="5" fill="#C24914" />
            </svg>
          </S.AlertBalls>
          <S.AlertMessage>
            <S.CloseButton onClick={() => handleCloseAlertButton()}>
              <svg
                width="10"
                height="10"
                viewBox="0 0 10 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M1 1L9 9" stroke="white" stroke-linecap="round" />
                <path d="M9 1L1 9" stroke="white" stroke-linecap="round" />
              </svg>
            </S.CloseButton>
            <h2>Ops!</h2>
            <p>Não conseguimos indentificar sua conta.</p>
          </S.AlertMessage>
        </S.AlertBox>
        <S.LabelAndInputStyled id="userSearch">
          Usuário
          <input
            name="search"
            type="text"
            placeholder="Digite aqui seu usuário do Github"
          />
        </S.LabelAndInputStyled>
        <S.ButtonSubmitFormStyled onClick={() => handleSubmitButton()}>
          Entrar
        </S.ButtonSubmitFormStyled>
      </S.FormBoxStyled>
    </S.FormAccessStyled>
  )
}
