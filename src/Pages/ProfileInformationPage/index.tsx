import * as S from './style'
import { Header } from '../../Components/Header/Header'
import { ProfileInfoMain } from '../../Components/ProfileInfoMain'
import { useLoading } from '../../Contexts/LoadingContext'
import { Loading } from '../../Components/Loading'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { GetUser } from '../../Service/GithubUsers.service'
import { useUserInfo } from '../../Contexts/UserInfoContext'
import { useShowAlert } from '../../Contexts/ShowAlertMessageContext'
export function ProfileInformationPage() {
  const { isLoading, setLoadingState } = useLoading()
  const { setUserInfo, userInfo } = useUserInfo()
  const { setShowAlertState } = useShowAlert()

  const navigate = useNavigate()
  const { user } = useParams()

  const getUser = async () => {
    setLoadingState(true)
    await GetUser(user as string)
      .then(e => {
        setUserInfo({
          avatar_url: e.avatar_url,
          bio: e.bio,
          name: e.name,
          login: e.login,
          repos_url: e.repos_url
        })

        setLoadingState(false)
      })
      .catch(() => {
        setShowAlertState(true)
        navigate('/')

        setLoadingState(false)
      })
  }

  useEffect(() => {
    getUser()
  }, [])
  useEffect(() => {
    console.log(userInfo)
  }, [userInfo])

  return (
    <S.ProfileInformationPageStyled>
      <Header isVisibleOnLargeScreens />
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
