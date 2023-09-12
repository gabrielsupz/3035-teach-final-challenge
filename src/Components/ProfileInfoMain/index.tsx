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
          <h3>
            Nome: <strong>Gabriel Suptitz</strong>
          </h3>
          <h3>
            Bio:{' '}
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta,
              velit at voluptatem nemo
            </p>
          </h3>
        </S.NameAndBioStyled>
      </S.InfoProfileStyled>

      <div>
        <section>
          <h2>Repositórios</h2>
        </section>

        <S.RepositorysBoxStyled>
          <Repository />
          <Repository />
          <Repository />
        </S.RepositorysBoxStyled>
      </div>
    </S.ProfileInfoMainStyled>
  )
}
