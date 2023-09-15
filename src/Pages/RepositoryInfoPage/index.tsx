import * as S from './style'
import { Header } from '../../Components/Header/Header'
import { Repository } from '../../Components/Repository'

export function RepositoryInfoPage() {
  return (
    <S.RepositoryInfoPageStyled>
      <Header isVisibleInDesktop />

      <S.RepositoryInfoMainStyled>
        <h2>Especificações</h2>

        <S.RepositoryDetailsShowBox>
          <Repository RepositoryDatailsShow />
        </S.RepositoryDetailsShowBox>
      </S.RepositoryInfoMainStyled>
    </S.RepositoryInfoPageStyled>
  )
}
