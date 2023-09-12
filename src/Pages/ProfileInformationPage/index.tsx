import * as S from './style'
import { Header } from '../../Components/Header/Header'
import { ProfileInfoMain } from '../../Components/ProfileInfoMain'

export function ProfileInformationPage() {
  return (
    <S.ProfileInformationPageStyled>
      <Header isVisibleInDesktop />
      <ProfileInfoMain />
    </S.ProfileInformationPageStyled>
  )
}
