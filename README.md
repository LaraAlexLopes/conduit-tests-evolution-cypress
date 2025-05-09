
# 🚀 Conduit Tests Evolution with Cypress

Este repositório apresenta uma evolução progressiva de testes **frontend** para a aplicação [Conduit](https://github.com/gothinkster/react-redux-realworld-example-app), utilizando a ferramenta de testes end-to-end **Cypress**.

O foco é demonstrar diferentes níveis de organização, abstração e reutilização de código ao escrever testes para as funcionalidades de **autenticação** (`Sign Up` e `Sign In`).

---

## 🧪 Objetivo

O projeto busca mostrar como testes podem ser implementados de maneira progressiva, partindo de abordagens simples e diretas até estruturas mais limpas, reutilizáveis e orientadas ao domínio, seguindo boas práticas de automação frontend.

---

## 📁 Estrutura dos Testes

Todos os testes estão organizados por versão (V0 a V3), em arquivos separados para cada funcionalidade (`SignUp`,`SignIn` e `Home`).

### V0 — Código direto e sem abstração

- Testes escritos de forma explícita, linha por linha
- Sem `beforeEach` ou aliases
- Foco: aprender o fluxo de testes com Cypress

### V1 — Uso de `beforeEach` e aliases

- Introdução à reutilização com `cy.get(...).as(...)`
- Separação de setup repetitivo
- Leitura mais limpa e organizada

### V2 — Introdução a funções auxiliares (helpers)

- Criação de funções genéricas como `clickElement`, `typeIntoField`
- Redução de duplicidade de código
- Mais modularidade

### V3 — Abstração orientada ao domínio

- Funções específicas como `enterEmail`, `confirmer`, `expectErrorMessageToBe`
- Leitura em estilo DSL (*domain-specific language*)
- Facilita manutenção e testes legíveis para não desenvolvedores

---

## 🛠️ Ferramentas e Tecnologias

- [Cypress](https://www.cypress.io/) — Testes end-to-end
- Projeto base: [react-redux-realworld-example-app](https://github.com/gothinkster/react-redux-realworld-example-app)
- Estrutura Gherkin nos nomes dos testes para melhor clareza

---

## ▶️ Executando os testes

1. Instale as dependências:
   ```bash
   npm install
   ```

2. Inicie o projeto base (Conduit) em `localhost`.

3. Em outro terminal, execute o Cypress:
   ```bash
   npx cypress open
   ```

4. Selecione o teste que deseja executar (V0 a V3).

---

## 🧭 Navegação

```bash
cypress/
└── e2e/
    └── Home/  
        ├── Home-v0.cy.js
        ├── Home-v1.cy.js
        ├── Home-v2.cy.js
        ├── Home-v3.cy.js
    └── SignUp/
        ├── SignUp-v0.cy.js
        ├── SignUp-v1.cy.js
        ├── SignUp-v2.cy.js
        ├── SignUp-v3.cy.js
    └── SignIn/
        ├── SignIn-v0.cy.js
        ├── SignIn-v1.cy.js
        ├── SignIn-v2.cy.js
        └── SignIn-v3.cy.js
```

---

## 📌 Observações

- Os testes utilizam nomes descritivos no padrão **Gherkin**: `Given`, `When`, `Then`.
- A ideia principal é demonstrar **boas práticas de evolução de testes**, não apenas sua execução final.
- Útil para aprendizado, times iniciando com Cypress, ou refatorações de suites antigas.

---

## ✨ Autor

> Projeto criado por **Lara Lopes** como exercício de aprendizado e boas práticas de testes frontend.
