import * as S from './style'
import { useLoading } from '../../Contexts/LoadingContext'
import { Loading } from '../Loading'
import { FormContent } from '../FormContent'
import { useEffect } from 'react'
export function FormAccess() {
  const { isLoading } = useLoading()

  useEffect(() => {
    console.log(isLoading)
  }, [isLoading])

  return (
    <S.FormAccessStyled>
      <S.FormBoxStyled>
        {!isLoading ? <FormContent /> : <Loading />}
      </S.FormBoxStyled>
    </S.FormAccessStyled>
  )
}
