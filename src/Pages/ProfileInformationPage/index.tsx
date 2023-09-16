import * as S from './style'
import { Header } from '../../Components/Header/Header'
import { ProfileInfoMain } from '../../Components/ProfileInfoMain'
import { useLoading } from '../../Contexts/LoadingContext'
import { Loading } from '../../Components/Loading'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { GetUser } from '../../Service/GithubUsers.service'

export function ProfileInformationPage() {
  const { isLoading, setLoadingState } = useLoading()
  const navigate = useNavigate()
  const { user } = useParams()

  const getUser = async () => {
    setLoadingState(true)
    await GetUser(user as string)
      .then(e => {
        console.log(e)
        setLoadingState(false)
      })
      .catch(() => {
        navigate('/')
        setLoadingState(false)
      })
  }

  useEffect(() => {
    getUser()
  }, [])

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
