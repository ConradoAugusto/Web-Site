# Site institucional — consultoria de RH e ERP

Front-end de um site institucional multipágina que desenvolvi para uma consultoria de RH, folha de pagamento e ERP. Esta é uma versão de portfólio: marca, textos de clientes, imagens, vídeos e integrações reais foram substituídos por placeholders e dados fictícios. A estrutura, os componentes e os estilos são os do projeto original.

## Stack

- React 18 + Vite
- React Router (rotas por página de serviço, blog com rota dinâmica)
- SCSS Modules + Bootstrap 5
- react-slick (carrosséis de logos, depoimentos e serviços)
- react-helmet-async (title, description e canonical por rota)
- Chart.js (simulador FAP), react-countup (contadores animados), SweetAlert2 (feedback dos formulários)

## O que tem

- **Home e páginas de serviço**: Consultoria ERP, BPO de folha, Body Shop, Portal RH, Controle de Ponto, Remuneração, SST e Suporte Operacional
- **Blog**: listagem com filtro por tag e paginação, destaques e página de artigo com curtida. No original consumia a API REST do WordPress; aqui usa dados mock com o mesmo formato
- **Formulários de lead** com máscara de telefone internacional e página de agradecimento
- **Calculadora e simulador FAP** interativos
- **Botão flutuante de WhatsApp** com rodízio entre atendentes
- Animações de entrada por `IntersectionObserver` e layout responsivo

## Rodando localmente

```bash
npm install
npm run dev
```

Acesse `http://localhost:5173`.

## Sobre os dados

Toda a comunicação com o backend fica em [`src/api.js`](src/api.js), que nesta versão devolve dados mock. Para ligar em uma API real, basta reimplementar as funções desse arquivo mantendo as mesmas assinaturas.
