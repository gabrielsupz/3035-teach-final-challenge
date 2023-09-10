import { Aside } from '../../Components/Aside'
import { FormAccess } from '../../Components/FormAccess'
import { Header } from '../../Components/Header/Header'
import * as S from './style'
export function AccessPage() {
  return (
    <S.AccessPage>
      <Header />
      <Aside />
      <FormAccess />
    </S.AccessPage>
  )
}
