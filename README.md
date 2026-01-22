# Portfolio Website

Um portfólio moderno e responsivo construído com Next.js 16, React 19, TypeScript e Tailwind CSS.

## 🚀 Tecnologias

- **Next.js 16** - Framework React para produção
- **React 19** - Biblioteca JavaScript para interfaces
- **TypeScript** - Superset tipado do JavaScript
- **Tailwind CSS 4** - Framework CSS utilitário
- **Radix UI** - Componentes acessíveis e não estilizados
- **Lucide React** - Ícones modernos
- **Next Themes** - Suporte a tema claro/escuro

## 📦 Estrutura do Projeto

```
├── app/                  # Páginas e rotas do Next.js
├── components/           # Componentes React reutilizáveis
│   ├── ui/              # Componentes de UI base
│   ├── header.tsx       # Cabeçalho do site
│   ├── hero.tsx         # Seção hero
│   ├── experience.tsx   # Seção de experiência
│   ├── education.tsx    # Seção de educação
│   ├── skills.tsx       # Seção de habilidades
│   ├── projects.tsx     # Seção de projetos
│   └── footer.tsx       # Rodapé do site
├── hooks/               # React hooks customizados
├── lib/                 # Utilitários e helpers
├── public/              # Arquivos estáticos
└── styles/              # Estilos globais
```

## 🛠️ Instalação

1. Clone o repositório:
```bash
git clone <seu-repositorio>
cd portfolio
```

2. Instale as dependências:
```bash
pnpm install
# ou
npm install
# ou
yarn install
```

3. Execute o servidor de desenvolvimento:
```bash
pnpm dev
# ou
npm run dev
# ou
yarn dev
```

4. Abra [http://localhost:3000](http://localhost:3000) no seu navegador.

## 📝 Scripts Disponíveis

- `pnpm dev` - Inicia o servidor de desenvolvimento
- `pnpm build` - Cria a build de produção
- `pnpm start` - Inicia o servidor de produção
- `pnpm lint` - Executa o linter

## 🎨 Personalização

### Informações Pessoais

Edite os componentes em `components/` para adicionar suas informações:

- `hero.tsx` - Nome, título e descrição
- `experience.tsx` - Experiência profissional
- `education.tsx` - Formação acadêmica
- `skills.tsx` - Habilidades técnicas
- `projects.tsx` - Projetos realizados

### Tema

O site suporta tema claro e escuro automaticamente. A troca é feita através do componente `theme-provider.tsx`.

### Estilos

Os estilos globais estão em:
- `app/globals.css` - Estilos globais do Next.js
- `styles/globals.css` - Estilos customizados adicionais

## 🚀 Deploy

### Vercel (Recomendado)

A forma mais fácil de fazer deploy é usando a [Vercel](https://vercel.com):

1. Faça push do código para o GitHub
2. Importe o projeto na Vercel
3. A Vercel detectará automaticamente o Next.js e configurará o build

### Outras Plataformas

O projeto pode ser deployado em qualquer plataforma que suporte Next.js:
- Netlify
- AWS Amplify
- Railway
- Render

## 📄 Licença

Este projeto está sob a licença MIT.

## 👤 Autor

Personalize esta seção com suas informações de contato e redes sociais.
