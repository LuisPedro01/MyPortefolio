# Gemini CLI Instructions - MyPortfolio

Este projeto é um portfólio pessoal desenvolvido com **React**. Segue as diretrizes abaixo para garantir consistência e qualidade nas tuas intervenções.

## Arquitetura e Estrutura de Pastas

- `src/components/`: Componentes reutilizáveis (ex: `NavBar`, `Footer`, `BasicCard`).
- `src/pages/`: Componentes que representam páginas completas (ex: `Home`, `Projects`, `AboutMe`).
- `src/css/`: Todos os ficheiros CSS devem ser colocados aqui, seguindo a convenção de nomeação do componente/página a que se referem.
- `src/assets/`: Imagens, logótipos e outros recursos estáticos.
- `src/helpers/`: Listas de dados estáticos, como projetos e experiências.
- `src/email/`: Templates de email utilizando `react-email`.

## Tecnologias Principais

- **Frontend:** React 18
- **Estilização:** CSS Tradicional (em `src/css`), Material UI (MUI) para componentes complexos e Tailwind CSS.
- **Routing:** `react-router-dom` (v6).
- **Emails:** `react-email` e `Resend`.
- **Timeline:** `react-vertical-timeline-component`.

## Convenções de Código

1.  **Componentes:** Utiliza Functional Components com Hooks. Prefere a extensão `.jsx` para ficheiros que contenham JSX.
2.  **Estilos:** 
    - Sempre que criares um novo componente/página, cria o respetivo ficheiro `.css` em `src/css/`.
    - Importa o CSS no topo do ficheiro do componente.
    - Respeita o uso de MUI para componentes de UI específicos (Cards, Buttons, etc.) quando já estiverem a ser usados.
3.  **Dados:** Não "hardcodes" listas de projetos nos componentes das páginas. Adiciona-os em `src/helpers/ProjectList.js` (ou ficheiros similares) e importa-os.
4.  **Imagens:** Coloca novas imagens em `src/assets/` e importa-as no topo do ficheiro JS/JSX antes de usar.

## Scripts Úteis

- `npm start`: Inicia o servidor de desenvolvimento.
- `npm run build`: Cria a build de produção.
- `npm test`: Corre os testes unitários.
- `npm run dev`: Inicia o ambiente de desenvolvimento para templates de email (em `src/email`).

## Instruções Específicas para o Agente

- Ao adicionar um novo projeto, atualiza os ficheiros em `src/helpers/`.
- Ao criar uma nova página, não te esqueças de configurar a rota em `src/App.js` e adicionar o link na `NavBar.js`.
- Mantém o design responsivo e limpo, seguindo a estética já existente no projeto.
