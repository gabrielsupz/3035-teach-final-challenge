import { Repository } from '../Repository'
import * as S from './styled'
export function ProfileInfoMain() {
  return (
    <S.ProfileInfoMainStyled>
      <h2>Informações do Perfil</h2>
      <S.InfoProfileStyled>
        <img
          src="https://avatars.githubusercontent.com/u/102992996?s=400&u=80dfdee29368bfbd801dd0d3d6f27a84009a10f1&v=4"
          alt=""
        />

        <S.NameAndBioStyled>
          <h4>
            Nome: <strong>Gabriel Suptitz</strong>
          </h4>
          <h4>
            Bio:{' '}
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta,
              velit at voluptatem nemo
            </p>
          </h4>
        </S.NameAndBioStyled>
      </S.InfoProfileStyled>

      <S.SectionRepositoryStyled>
        <h2>Repositórios</h2>
        <S.PageAndPageButtonsBoxStyled>
          <p>3 de 10 </p>
          <div>
            <button>
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
            </button>
            <button>
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
            </button>
          </div>
        </S.PageAndPageButtonsBoxStyled>
        <S.RepositorysBoxStyled>
          <Repository />
          <Repository />
          <Repository />
        </S.RepositorysBoxStyled>
      </S.SectionRepositoryStyled>
    </S.ProfileInfoMainStyled>
  )
}
