import * as S from './style'

export function Repository() {
  return (
    <S.RepositoryStyled>
      <h3>Repositório</h3>

      <S.RepositoryDivStyled>
        <h4>
          Link: <p>www.github/gabrielsupz/profiel.com</p>
        </h4>
      </S.RepositoryDivStyled>
      <S.RepositoryDivStyled>
        <h4>
          Descrição:{' '}
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
            libero fugiat eligendi inventore modi illum alias dolorum iure
            porro, voluptates dolor dicta esse voluptatum ipsa adipisci tempore
            ullam ratione consequuntur!{' '}
          </p>
        </h4>
      </S.RepositoryDivStyled>
    </S.RepositoryStyled>
  )
}
