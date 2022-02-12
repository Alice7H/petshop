# React router: navegação spa

## Tarefas executadas

- Criado a página 404 (Não encontrada)
- Criado o componente de cabeçalho
- Criado rotas das páginas no App.js
- Criado roteamento para as páginas no cabeçalho

## Conceitos apresentados

React-Router-Dom é um pacote react para a manipulação de rotas.

O curso apresentou a versão 5.2.0 deste pacote, mas neste projeto, existe algumas modificações para a versão 6.2.1.

O BrowserRouter é um componente responsável por informar à aplicação que teremos um roteamento de componentes.

O antigo Switch era um componente que renderizava apenas o primeiro filho Route com o caminho correspondente, na versão 6, foi substituído por Routes.

O Route associa a rota ao component.
Nele temos os parâmetros element e path, na versão 5.2.0, usávamos parâmetros diferentes (path, exact e component).

O Link permite navegar entre páginas ao informar no parâmetro 'to' qual o nome da rota que será acessada pela URL

A MPA (multiple page application) trabalha de maneira tradicional, ou seja, a aplicação faz uma requisição ao servidor a cada página que precisa ser carregada.

A SPA (single page application) faz apenas uma requisição, recebe os arquivos que precisa do servidor, mas o responsável por gerenciar o que será exibido na aplicação são os componentes javascript.
