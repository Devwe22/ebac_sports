import { useAppDispatch, useAppSelector } from '../../store/hooks'
import {
  adicionarAoCarrinho,
  adicionarAosFavoritos,
  Produto as ProdutoType
} from '../../store/slices/carrinhoSlice'
import * as S from './styles'

type Props = {
  produto: ProdutoType
  estaNosFavoritos: boolean
}

export const paraReal = (valor: number): string =>
  new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
    valor
  )

const ProdutoComponent = ({ produto, estaNosFavoritos }: Props) => {
  const dispatch = useAppDispatch()
  const { itens } = useAppSelector((state) => state.carrinho)

  const handleAdicionarAoCarrinho = (): void => {
    const produtoJaNoCarrinho = itens.find(
      (item: ProdutoType) => item.id === produto.id
    )

    if (produtoJaNoCarrinho) {
      alert('Item já adicionado')
    } else {
      dispatch(adicionarAoCarrinho(produto))
    }
  }

  const handleFavoritar = (): void => {
    dispatch(adicionarAosFavoritos(produto))
  }

  return (
    <S.Produto>
      <S.Capa>
        <img src={produto.imagem} alt={produto.nome} />
      </S.Capa>
      <S.Titulo>{produto.nome}</S.Titulo>
      <S.Prices>
        <strong>{paraReal(produto.preco)}</strong>
      </S.Prices>
      <S.BtnComprar onClick={handleFavoritar} type="button">
        {estaNosFavoritos
          ? '- Remover dos favoritos'
          : '+ Adicionar aos favoritos'}
      </S.BtnComprar>
      <S.BtnComprar onClick={handleAdicionarAoCarrinho} type="button">
        Adicionar ao carrinho
      </S.BtnComprar>
    </S.Produto>
  )
}

export default ProdutoComponent
