import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type Produto = {
  id: number
  nome: string
  preco: number
  imagem: string
}

export interface CarrinhoState {
  itens: Produto[]
  favoritos: Produto[]
}

const initialState: CarrinhoState = {
  itens: [],
  favoritos: []
}

const carrinhoSlice = createSlice({
  name: 'carrinho',
  initialState,
  reducers: {
    adicionarAoCarrinho: (state, action: PayloadAction<Produto>) => {
      const produto = action.payload
      const produtoExistente = state.itens.find(
        (item) => item.id === produto.id
      )

      if (!produtoExistente) {
        state.itens.push(produto)
      } else {
        // O alerta será mostrado no componente
        return state
      }
    },
    removerDoCarrinho: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter((item) => item.id !== action.payload)
    },
    adicionarAosFavoritos: (state, action: PayloadAction<Produto>) => {
      const produto = action.payload
      const produtoExistente = state.favoritos.find(
        (item) => item.id === produto.id
      )

      if (produtoExistente) {
        state.favoritos = state.favoritos.filter(
          (item) => item.id !== produto.id
        )
      } else {
        state.favoritos.push(produto)
      }
    },
    removerDosFavoritos: (state, action: PayloadAction<number>) => {
      state.favoritos = state.favoritos.filter(
        (item) => item.id !== action.payload
      )
    }
  }
})

export const {
  adicionarAoCarrinho,
  removerDoCarrinho,
  adicionarAosFavoritos,
  removerDosFavoritos
} = carrinhoSlice.actions

export default carrinhoSlice.reducer
