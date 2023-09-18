import * as S from './style'
import { Header } from '../../Components/Header/Header'
import { ProfileInfoMain } from '../../Components/ProfileInfoMain'
import { useLoading } from '../../Contexts/LoadingContext'
import { Loading } from '../../Components/Loading'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { GetUser, GetUserRepositorys } from '../../Service/GithubUsers.service'
import { useUserInfo } from '../../Contexts/UserInfoContext'
import { useShowAlert } from '../../Contexts/ShowAlertMessageContext'

export interface RepositoryProps {
  name: string
  language: string
  url: string
  description: string
  visibility: string
}

export function ProfileInformationPage() {
  const { isLoading, setLoadingState } = useLoading()
  const { setUserInfo, userInfo } = useUserInfo()
  const { setShowAlertState } = useShowAlert()
  const navigate = useNavigate()
  const { user } = useParams()

  const getUser = async () => {
    setLoadingState(true)

    try {
      const userData = await GetUser(user as string)

      const reposData = await GetUserRepositorys(user as string)
      const filteredRepos = reposData.map((repo: any) => ({
        name: repo.name,
        language: repo.language,
        url: repo.svn_url,
        description: repo.description,
        visibility: repo.visibility
      }))
      setUserInfo({
        avatar_url: userData.avatar_url,
        bio: userData.bio,
        name: userData.name,
        login: userData.login,
        repositoriesList: filteredRepos
      })
    } catch (error) {
      setShowAlertState(true)
      navigate('/')
    } finally {
      setLoadingState(false)
    }
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
