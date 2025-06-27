import { useGetProdutosQuery } from '../store/api/produtosApi'
import { useAppSelector } from '../store/hooks'
import { Produto as ProdutoType } from '../store/slices/carrinhoSlice'
import Produto from '../components/Produto'

import * as S from './styles'

const ProdutosComponent = () => {
  const { data: produtos = [], isLoading, error } = useGetProdutosQuery()
  const { favoritos } = useAppSelector((state) => state.carrinho)

  const produtoEstaNosFavoritos = (produtoId: number): boolean => {
    return favoritos.some((favorito: ProdutoType) => favorito.id === produtoId)
  }

  if (isLoading) return <div>Carregando produtos...</div>
  if (error) return <div>Erro ao carregar produtos</div>

  return (
    <>
      <S.Produtos>
        {produtos.map((produto: ProdutoType) => (
          <Produto
            estaNosFavoritos={produtoEstaNosFavoritos(produto.id)}
            key={produto.id}
            produto={produto}
          />
        ))}
      </S.Produtos>
    </>
  )
}

export default ProdutosComponent
