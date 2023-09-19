import { Repository } from '../Repository'
import { useUserInfo } from '../../Contexts/UserInfoContext'
import { useState } from 'react'
import * as S from './styled'

export function ProfileInfoMain() {
  const { userInfo } = useUserInfo()
  const [currentPage, setCurrentPage] = useState(1)
  const repositoriesList = userInfo.repositoriesList

  const pages = repositoriesList ? Math.ceil(repositoriesList.length / 3) : 0
  const startIndex = (currentPage - 1) * 3
  const endIndex = startIndex + 3
  const repositoriesToShow = repositoriesList
    ? repositoriesList.slice(startIndex, endIndex)
    : []

  const handleNextPage = () => {
    if (currentPage < pages) {
      setCurrentPage(currentPage + 1)
    }
  }

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
    }
  }

  return (
    <S.ProfileInfoMainStyled>
      <h2>Informações do Perfil</h2>
      <S.InfoProfileStyled>
        <img
          src={userInfo.avatar_url}
          alt={`Imagem do usuário ${userInfo.login}`}
        />

        <S.NameAndBioStyled>
          <h4>
            Nome: <strong>{userInfo.name || userInfo.login}</strong>
          </h4>
          <h4>
            Bio: <p>{userInfo.bio || 'Sem biografia'}</p>
          </h4>
        </S.NameAndBioStyled>
      </S.InfoProfileStyled>

      <S.SectionRepositoryStyled>
        <h2>Repositórios</h2>
        {pages ? (
          <S.PageAndPageButtonsBoxStyled>
            <p>
              {currentPage} de {pages}
            </p>
            <div>
              <S.PageButtonStyled onClick={handlePreviousPage}>
                <svg
                  width="11"
                  height="10"
                  viewBox="0 0 11 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.19943 0.983093L1.4637 4.71882C1.05467 5.12785 1.07697 5.79758 1.5123 6.1785L5.19943 9.40473"
                    stroke="#C4C4C4"
                    stroke-linecap="round"
                  />
                  <path
                    d="M9.69105 5.47461H1.26941"
                    stroke="#C4C4C4"
                    stroke-linecap="round"
                  />
                </svg>
              </S.PageButtonStyled>
              <S.PageButtonStyled onClick={handleNextPage}>
                <svg
                  width="11"
                  height="10"
                  viewBox="0 0 11 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.76304 0.983093L9.49876 4.71882C9.9078 5.12785 9.8855 5.79758 9.45016 6.1785L5.76304 9.40473"
                    stroke="#575759"
                    stroke-linecap="round"
                  />
                  <path
                    d="M1.27154 5.47461H9.69318"
                    stroke="#575759"
                    stroke-linecap="round"
                  />
                </svg>
              </S.PageButtonStyled>
            </div>
          </S.PageAndPageButtonsBoxStyled>
        ) : (
          ''
        )}
        <S.RepositorysBoxStyled>
          {repositoriesList ? (
            userInfo.repositoriesList.length > 0 ? (
              repositoriesToShow.map((repository, index) => (
                <Repository
                  description={repository.description}
                  language={repository.language}
                  name={repository.name}
                  url={repository.url}
                  visibility={repository.visibility}
                  index={startIndex + index}
                  key={startIndex + index}
                />
              ))
            ) : (
              <h5>Sem repositórios</h5>
            )
          ) : (
            ''
          )}
        </S.RepositorysBoxStyled>
      </S.SectionRepositoryStyled>
    </S.ProfileInfoMainStyled>
  )
}
