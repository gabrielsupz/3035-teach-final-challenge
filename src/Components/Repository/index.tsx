import { useNavigate } from 'react-router-dom'
import { RepositoryProps } from '../../Pages/ProfileInformationPage'
import * as S from './style'

type RepositoryComponentProps = {
  RepositoryDatailsShow?: boolean
  index: number
} & RepositoryProps

export function Repository({
  description,
  language,
  name,
  url,
  visibility,
  index,
  RepositoryDatailsShow
}: RepositoryComponentProps) {
  const navigate = useNavigate()
  const handleCardClick = () => {
    navigate(`repositories/${index}`)
  }

  if (RepositoryDatailsShow) {
    return (
      <S.RepositoryStyled showDatails>
        <h3>{name}</h3>

        <S.RepositoryDivStyled showDatails>
          <h4>
            Link:{' '}
            <a target="_blank" href={url}>
              {url}
            </a>
          </h4>
        </S.RepositoryDivStyled>
        <S.RepositoryDivStyled showDatails>
          <h4>
            Privacidade: <p>{visibility}</p>
          </h4>
        </S.RepositoryDivStyled>
        <S.RepositoryDivStyled showDatails>
          <h4>
            Linguagem: <p>{language}</p>
          </h4>
        </S.RepositoryDivStyled>

        <S.RepositoryDivStyled showDatails>
          <h4>
            Descrição: <p>{description}</p>
          </h4>
        </S.RepositoryDivStyled>
      </S.RepositoryStyled>
    )
  } else {
    return (
      <S.RepositoryStyled
        showDatails={false}
        role="button"
        onClick={() => handleCardClick()}
      >
        <h3>{name}</h3>

        <S.RepositoryDivStyled showDatails={false}>
          <h4>
            Link:{' '}
            <a target="_blank" href={url}>
              {url}
            </a>
          </h4>
        </S.RepositoryDivStyled>
        <S.RepositoryDivStyled showDatails={false}>
          <h4>
            Descrição: <p>{description}</p>
          </h4>
        </S.RepositoryDivStyled>
      </S.RepositoryStyled>
    )
  }
}
