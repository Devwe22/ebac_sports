import * as S from './styles'
import { useAppSelector } from '../../store/hooks'
import { Produto } from '../../store/slices/carrinhoSlice'

import cesta from '../../assets/cesta.png'
import { paraReal } from '../Produto'

const Header = () => {
  const { itens, favoritos } = useAppSelector((state) => state.carrinho)

  const valorTotal = itens.reduce((acc: number, item: Produto) => {
    acc += item.preco
    return acc
  }, 0)

  return (
    <S.Header>
      <h1>EBAC Sports</h1>
      <div>
        <span>{favoritos.length} favoritos</span>
        <img src={cesta} />
        <span>
          {itens.length} itens, valor total: {paraReal(valorTotal)}
        </span>
      </div>
    </S.Header>
  )
}

export default Header
