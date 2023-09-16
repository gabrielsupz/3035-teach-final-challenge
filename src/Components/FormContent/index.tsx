import { useEffect } from 'react'
import { GetUser } from '../../Service/GithubUsers.service'

import { useNavigate } from 'react-router-dom'
import { useLoading } from '../../Contexts/LoadingContext'
import { useShowAlert } from '../../Contexts/ShowAlertMessageContext'
import * as S from './style'

export function FormContent() {
  const { setLoadingState } = useLoading()
  const { setShowAlertState, showAlert } = useShowAlert()
  const navigate = useNavigate()

  useEffect(() => {
    const AlertBox = document.querySelector('#AlertBox')
    if (showAlert) {
      AlertBox?.classList.add('active')
    } else {
      AlertBox?.classList.remove('active')
    }
  }, [showAlert])

  const handleSubmitButton = async () => {
    const searchUser = document.querySelector('#searchUser') as HTMLInputElement
    const userName = searchUser.value
    setLoadingState(true)
    await GetUser(userName)
      .then(() => navigate(`/profile/${userName}`))
      .catch(() => {
        setShowAlertState(true)
        setLoadingState(false)
      })
  }

  const handleCloseAlertButton = () => {
    setShowAlertState(false)
  }
  return (
    <>
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
                strokeWidth="3"
                strokeLinecap="round"
              />
              <path
                d="M30 20L20 30"
                stroke="white"
                strokeWidth="3"
                strokeLinecap="round"
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
              <path d="M1 1L9 9" stroke="white" strokeLinecap="round" />
              <path d="M9 1L1 9" stroke="white" strokeLinecap="round" />
            </svg>
          </S.CloseButton>
          <h2>Ops!</h2>
          <p>Não conseguimos indentificar sua conta.</p>
        </S.AlertMessage>
      </S.AlertBox>
      <S.LabelAndInputStyled id="userSearch">
        Usuário
        <input
          id="searchUser"
          name="search"
          type="text"
          placeholder="Digite aqui seu usuário do Github"
        />
      </S.LabelAndInputStyled>
      <S.ButtonSubmitFormStyled onClick={() => handleSubmitButton()}>
        Entrar
      </S.ButtonSubmitFormStyled>
    </>
  )
}
