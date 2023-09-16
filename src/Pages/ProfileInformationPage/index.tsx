import * as S from './style'
import { Header } from '../../Components/Header/Header'
import { ProfileInfoMain } from '../../Components/ProfileInfoMain'
import { useLoading } from '../../Contexts/LoadingContext'
import { Loading } from '../../Components/Loading'

import { useEffect } from 'react'
export function ProfileInformationPage() {
  const { isLoading } = useLoading()

  useEffect(() => {
    console.log(isLoading)
  }, [isLoading])

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
