import * as S from './style'
import { Header } from '../../Components/Header/Header'
import { Repository } from '../../Components/Repository'
import { useUserInfo } from '../../Contexts/UserInfoContext'
import { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
export function RepositoryInfoPage() {
  const { userInfo } = useUserInfo()
  const { index } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    if (index) {
      if (!userInfo.repositoriesList[parseInt(index)]) {
        navigate('/t')
      }
    }
  }, [])

  if (index) {
    const indexNumber = parseInt(index)
    const { description, language, name, url, visibility } =
      userInfo.repositoriesList[indexNumber]

    return (
      <S.RepositoryInfoPageStyled>
        <Header isVisibleOnLargeScreens />

        <S.RepositoryInfoMainStyled>
          <h2>Especificações</h2>

          <S.RepositoryDetailsShowBox>
            <Repository
              RepositoryDatailsShow
              description={description}
              language={language}
              name={name}
              url={url}
              visibility={visibility}
              index={indexNumber}
              key={index}
            />
          </S.RepositoryDetailsShowBox>
        </S.RepositoryInfoMainStyled>
      </S.RepositoryInfoPageStyled>
    )
  } else {
    return <div>Sem repositórios</div>
  }
}
