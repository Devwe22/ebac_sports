# Instruções de Instalação - EBAC Sports Redux

## Pré-requisitos
- Node.js versão 14 ou superior
- npm ou yarn

## Passos para instalação

1. **Extrair o projeto**
   ```bash
   # Extrair o arquivo zip
   unzip ebac_sports_redux_corrigido.zip
   cd ebac_sports-main
   ```

2. **Instalar dependências**
   ```bash
   npm install
   ```
   
   Ou se preferir usar yarn:
   ```bash
   yarn install
   ```

3. **Executar o projeto**
   ```bash
   npm start
   ```
   
   Ou com yarn:
   ```bash
   yarn start
   ```

4. **Acessar a aplicação**
   - Abra o navegador em: http://localhost:3000

## Dependências principais instaladas
- `@reduxjs/toolkit` - Para gerenciamento de estado
- `react-redux` - Para integração React + Redux
- `react` - Framework principal
- `react-dom` - Para renderização
- `styled-components` - Para estilização
- `typescript` - Para tipagem

## Estrutura Redux criada
```
src/
├── store/
│   ├── index.ts          # Configuração do store
│   ├── hooks.ts          # Hooks tipados
│   ├── slices/
│   │   └── carrinhoSlice.ts  # Slice do carrinho
│   └── api/
│       └── produtosApi.ts    # RTK Query para produtos
```

## Funcionalidades implementadas
- ✅ Gerenciamento de estado com Redux Toolkit
- ✅ Requisições com RTK Query
- ✅ Carrinho de compras
- ✅ Sistema de favoritos
- ✅ Tipagem completa com TypeScript

## Solução de problemas

### Erro de módulos não encontrados
Se você encontrar erros como "Cannot find module", certifique-se de:
1. Ter executado `npm install` corretamente
2. Estar na pasta correta do projeto
3. Ter Node.js versão 14+ instalado

### Erros de TypeScript
O projeto foi configurado com tipagens explícitas para máxima compatibilidade. Se ainda houver erros de TS, tente:
```bash
npm run build
```

Para verificar se há problemas de compilação.

