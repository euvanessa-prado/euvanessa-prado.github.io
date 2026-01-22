# 🚀 Como Criar o Repositório no GitHub

O repositório Git local já está criado e pronto! Agora siga estes passos para criar o repositório no GitHub:

## Passo 1: Criar Repositório no GitHub

1. Acesse [GitHub](https://github.com) e faça login
2. Clique no botão **"+"** no canto superior direito
3. Selecione **"New repository"**
4. Preencha as informações:
   - **Repository name**: `portfolio` (ou o nome que preferir)
   - **Description**: "Portfolio website built with Next.js 16, React 19, and TypeScript"
   - **Visibility**: Escolha Public ou Private
   - ⚠️ **NÃO marque** "Initialize this repository with a README" (já temos um!)
   - ⚠️ **NÃO adicione** .gitignore ou license (já temos!)
5. Clique em **"Create repository"**

## Passo 2: Conectar o Repositório Local ao GitHub

Após criar o repositório no GitHub, você verá uma página com instruções. Use os comandos abaixo:

### Opção A: Se você criou um repositório vazio (recomendado)

```bash
git remote add origin https://github.com/SEU-USUARIO/portfolio.git
git branch -M main
git push -u origin main
```

### Opção B: Usando SSH (se você tem chave SSH configurada)

```bash
git remote add origin git@github.com:SEU-USUARIO/portfolio.git
git branch -M main
git push -u origin main
```

**⚠️ IMPORTANTE**: Substitua `SEU-USUARIO` pelo seu nome de usuário do GitHub!

## Passo 3: Verificar

Após executar os comandos, atualize a página do GitHub e você verá todos os arquivos do seu portfólio!

## 📝 Comandos Git Úteis

Depois de conectado, você pode usar:

```bash
# Ver status dos arquivos
git status

# Adicionar mudanças
git add .

# Fazer commit
git commit -m "Sua mensagem aqui"

# Enviar para o GitHub
git push

# Puxar mudanças do GitHub
git pull
```

## 🌐 Deploy Automático (Opcional)

Depois de fazer push para o GitHub, você pode fazer deploy gratuito na Vercel:

1. Acesse [vercel.com](https://vercel.com)
2. Faça login com sua conta do GitHub
3. Clique em "Import Project"
4. Selecione seu repositório `portfolio`
5. Clique em "Deploy"

A Vercel vai detectar automaticamente que é um projeto Next.js e fazer o deploy!

## ✅ Checklist

- [ ] Criar repositório no GitHub
- [ ] Conectar repositório local ao GitHub
- [ ] Fazer push do código
- [ ] (Opcional) Deploy na Vercel
- [ ] Personalizar o conteúdo do portfólio
- [ ] Atualizar README.md com suas informações

## 🎨 Próximos Passos

Agora que o repositório está no GitHub, você pode:

1. **Personalizar o conteúdo**: Edite os arquivos em `components/` para adicionar suas informações
2. **Adicionar projetos**: Edite `components/projects.tsx`
3. **Atualizar experiência**: Edite `components/experience.tsx`
4. **Modificar habilidades**: Edite `components/skills.tsx`
5. **Trocar imagens**: Substitua as imagens em `public/`

Boa sorte com seu portfólio! 🚀
