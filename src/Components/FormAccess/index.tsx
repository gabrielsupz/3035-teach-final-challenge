import * as S from './style'
import { useLoading } from '../../Contexts/LoadingContext'
import { Loading } from '../Loading'
import { FormContent } from '../FormContent'
export function FormAccess() {
  const { isLoading } = useLoading()

  return (
    <S.FormAccessStyled>
      <S.FormBoxStyled>
        {isLoading ? <FormContent /> : <Loading />}
      </S.FormBoxStyled>
    </S.FormAccessStyled>
  )
}
