import * as S from './style'
import { Header } from '../../Components/Header/Header'
import { ProfileInfoMain } from '../../Components/ProfileInfoMain'
import { useLoading } from '../../Contexts/LoadingContext'
import { Loading } from '../../Components/Loading'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useUserInfo } from '../../Contexts/UserInfoContext'
import { useShowAlert } from '../../Contexts/ShowAlertMessageContext'
import { SetUserAndRepositories } from '../../Service/SetUserAndRepositories'

export interface RepositoryProps {
  name: string
  language: string
  url: string
  description: string
  visibility: string
}

export function ProfileInformationPage() {
  const { isLoading, setLoadingState } = useLoading()
  const { setUserInfo } = useUserInfo()
  const { setShowAlertState } = useShowAlert()
  const navigate = useNavigate()
  const { user } = useParams()

  useEffect(() => {
    SetUserAndRepositories(
      user as string,
      setLoadingState,
      setUserInfo,
      setShowAlertState,
      navigate
    )
  }, [])

  return (
    <S.ProfileInformationPageStyled>
      <Header $isVisibleOnLargeScreens />
      {isLoading ? (
        <S.LoadingContent>
          <Loading />
        </S.LoadingContent>
      ) : (
        <ProfileInfoMain />
      )}
    </S.ProfileInformationPageStyled>
  )
}
