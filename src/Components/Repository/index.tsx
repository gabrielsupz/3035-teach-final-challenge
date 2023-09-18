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
    navigate(`/repositories/${index}`)
  }

  function simplifyStrings(string: string) {
    if (string.length > 25) {
      return string.substring(0, 25) + '...'
    }

    return string
  }
  function capitalizeFirstLetter(inputString: string): string {
    if (inputString.length === 0) {
      return inputString
    }

    const firstLetter = inputString[0].toUpperCase()
    const remainingLetters = inputString.slice(1)

    return firstLetter + remainingLetters
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
            Privacidade:{' '}
            <p>{visibility ? capitalizeFirstLetter(visibility) : ''}</p>
          </h4>
        </S.RepositoryDivStyled>
        <S.RepositoryDivStyled showDatails>
          <h4>
            Linguagem: <p>{language ? language : 'Sem linguagem definida'}</p>
          </h4>
        </S.RepositoryDivStyled>

        <S.RepositoryDivStyled showDatails>
          <h4>
            Descrição: <p>{description ? description : 'Sem descrição'}</p>
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
              {url ? simplifyStrings(url) : 'Sem url'}
            </a>
          </h4>
        </S.RepositoryDivStyled>
        <S.RepositoryDivStyled showDatails={false}>
          <h4>
            Descrição:{' '}
            <p>
              {description ? simplifyStrings(description) : 'Sem descrição'}
            </p>
          </h4>
        </S.RepositoryDivStyled>
      </S.RepositoryStyled>
    )
  }
}
