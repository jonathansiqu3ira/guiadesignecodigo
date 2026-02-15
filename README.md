# Guia Prático – Design e Código

O **Guia Prático – Design e Código** é um projeto pessoal e autoral que documenta como eu penso, projeto e implemento interfaces digitais, conectando design, UX e código de forma prática.

Este não é um produto comercial, não é um site institucional e não é um Design System corporativo.  
É um **guia**, no formato de documentação, criado para organizar raciocínio, decisões e boas práticas aplicadas ao dia a dia.

---

## 🚀 Tecnologias

Este projeto é construído com uma stack moderna e simples, pensada para clareza e manutenção.

- **[Next.js 15](https://nextjs.org/)** (App Router)
- **[React 19](https://react.dev/)**
- **[TypeScript](https://www.typescriptlang.org/)**
- **[Tailwind CSS 4](https://tailwindcss.com/)**
- **[Lucide React](https://lucide.dev/)** (Ícones)
- **[Shiki](https://shiki.style/)** (Syntax highlighting)

---

## 📂 Estrutura do Projeto

A organização segue os padrões do Next.js App Router, com foco em separação de responsabilidades.

```
src/
├── app/                 # Rotas e páginas da aplicação
│   ├── componentes/     # Páginas de documentação de componentes
│   ├── fundamentos/     # Páginas teóricas (Cores, Tipografia, etc)
│   ├── layout.tsx       # Layout raiz (Sidebar, Footer, Providers)
│   └── page.tsx         # Home
├── components/          # Componentes React reutilizáveis
│   ├── layout/          # Componentes estruturais (PageLayout, Footer)
│   ├── ui/              # Componentes de UI (Button, Badge, Card)
│   └── Sidebar.tsx      # Navegação principal
└── lib/                 # Utilitários e tokens de design
```

---

## 🎨 Design System & Tokens

O projeto utiliza uma abordagem de **Tokens Semânticos** para cores e tipografia, garantindo consistência e suporte nativo a temas (Light/Dark Mode).

- **Primitivos:** Cores brutas (ex: `blue-500`) definidas no Tailwind.
- **Semânticos:** Abstrações de uso (ex: `action-primary`) mapeadas em variáveis CSS.
- **Componentes:** O Design System é construído "in-house", sem depender de bibliotecas de UI pesadas (como MUI ou Chakra), para manter o controle total sobre o markup e estilo.

---

## 🛠️ Como rodar o projeto

1. **Clone o repositório**
   ```bash
   git clone https://github.com/jonathansiqu3ira/guiadesignecodigo.git
   ```

2. **Instale as dependências**
   ```bash
   npm install
   ```

3. **Rode o servidor de desenvolvimento**
   ```bash
   npm run dev
   ```

4. **Acesse no navegador**
   Abra [http://localhost:3000](http://localhost:3000)

---

## 📖 Conteúdo Disponível

O guia está dividido em duas grandes seções:

### Fundamentos
Conceitos base que sustentam as decisões de interface.
- **Cores:** Arquitetura de tokens, contraste e acessibilidade.
- **Tipografia:** Escala modular, ritmo vertical e legibilidade.
- **Grid & Layout:** Estrutura responsiva e alinhamento.
- **UX & Usabilidade:** Princípios aplicados na prática.

### Componentes
Documentação técnica de elementos de UI.
- **Botões:** Estados, variantes e boas práticas.
- **Inputs:** Formulários acessíveis e validação.
- **Em breve:** Modais, Tabs, e mais.

---

## 📄 Licença

Este projeto é desenvolvido por [Jonathan Siqueira](https://www.linkedin.com/in/jonathansiqueira/) com fins educacionais e de referência. Sinta-se livre para estudar o código e adaptar os conceitos para seus próprios projetos.
