import * as S from './style'
interface RepositoryProps {
  RepositoryDatailsShow?: boolean
}
export function Repository({ RepositoryDatailsShow }: RepositoryProps) {
  if (RepositoryDatailsShow) {
    return (
      <S.RepositoryStyled isShowDatails>
        <h3>Repositório</h3>

        <S.RepositoryDivStyled isShowDatails>
          <h4>
            Link: <p>https://github.com/gabrielsupz/Design-System-IgniteLab</p>
          </h4>
        </S.RepositoryDivStyled>
        <S.RepositoryDivStyled isShowDatails>
          <h4>
            Privacidade: <p>Publico</p>
          </h4>
        </S.RepositoryDivStyled>
        <S.RepositoryDivStyled isShowDatails>
          <h4>
            Linguagem: <p>Java</p>
          </h4>
        </S.RepositoryDivStyled>

        <S.RepositoryDivStyled isShowDatails>
          <h4>
            Descrição:{' '}
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reiciendis libero fugiat eligendi inventore modi illum alias
              dolorum iure porro, voluptates dolor dicta esse voluptatum ipsa
              adipisci tempore ullam ratione consequuntur!{' '}
            </p>
          </h4>
        </S.RepositoryDivStyled>
      </S.RepositoryStyled>
    )
  } else {
    return (
      <S.RepositoryStyled isShowDatails={false}>
        <h3>Repositório</h3>

        <S.RepositoryDivStyled isShowDatails={false}>
          <h4>
            Link: <p>https://github.com/gabrielsupz/Design-System-IgniteLab</p>
          </h4>
        </S.RepositoryDivStyled>
        <S.RepositoryDivStyled isShowDatails={false}>
          <h4>
            Descrição:{' '}
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reiciendis libero fugiat eligendi inventore modi illum alias
              dolorum iure porro, voluptates dolor dicta esse voluptatum ipsa
              adipisci tempore ullam ratione consequuntur!{' '}
            </p>
          </h4>
        </S.RepositoryDivStyled>
      </S.RepositoryStyled>
    )
  }
}
