# EBAC Sports - Versão Redux

Este projeto foi migrado de useState para Redux Toolkit conforme solicitado.

## Alterações Realizadas

### 1. Redux Toolkit Configurado
- Instalado `@reduxjs/toolkit` e `react-redux`
- Configurado store principal em `src/store/index.ts`
- Criados hooks tipados em `src/store/hooks.ts`

### 2. Slice do Carrinho
- Criado `src/store/slices/carrinhoSlice.ts`
- Gerencia estado do carrinho e favoritos
- Actions: `adicionarAoCarrinho`, `removerDoCarrinho`, `adicionarAosFavoritos`, `removerDosFavoritos`

### 3. Redux Toolkit Query
- Criado `src/store/api/produtosApi.ts`
- Implementado `useGetProdutosQuery` para buscar produtos da API
- Substituiu o fetch manual por RTK Query

### 4. Componentes Refatorados
- **App.tsx**: Removido useState, simplificado
- **Header/index.tsx**: Usa `useAppSelector` para acessar estado
- **Produtos.tsx**: Usa `useGetProdutosQuery` e `useAppSelector`
- **Produto/index.tsx**: Usa `useAppDispatch` e `useAppSelector`

### 5. Provider Configurado
- **index.tsx**: Adicionado `Provider` do Redux

## Funcionalidades Mantidas
- ✅ Adicionar/remover favoritos
- ✅ Adicionar ao carrinho
- ✅ Alerta quando item já está no carrinho
- ✅ Contador de favoritos e itens no carrinho
- ✅ Cálculo do valor total

## Como Executar
```bash
npm install
npm start
```

## Tecnologias Utilizadas
- React
- TypeScript
- Redux Toolkit
- Redux Toolkit Query
- Styled Components

