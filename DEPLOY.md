# Guia de Deploy (Publicação)

Sua Landing Page está pronta! Aqui estão as maneiras mais fáceis de colocá-la no ar gratuitamente.

## Opção 1: Vercel (Recomendado)

A Vercel é a criadora do Next.js e tem a melhor infraestrutura para projetos React/Vite.

1.  Crie uma conta em [vercel.com](https://vercel.com).
2.  Instale a Vercel CLI (opcional) ou conecte seu GitHub.
    *   **Via GitHub (Mais fácil):**
        1. Suba este código para um repositório no GitHub.
        2. No painel da Vercel, clique em "Add New..." -> "Project".
        3. Selecione seu repositório.
        4. A Vercel detectará que é um projeto Vite automaticamente.
        5. Clique em "Deploy".
    *   **Via Arquivos (Sem GitHub):**
        1. No terminal do projeto, rode: `npm install -g vercel`
        2. Rode: `vercel`
        3. Siga as instruções na tela (aceite os padrões apertando Enter).

## Opção 2: Netlify

1.  Crie uma conta em [netlify.com](https://netlify.com).
2.  Arraste e solte a pasta `dist` (gerada pelo comando `npm run build`) para o painel da Netlify.
    *   *Nota: Certifique-se de rodar `npm run build` antes de arrastar.*

## Opção 3: Hostgator / Locaweb / cPanel (Hospedagem Tradicional)

Se você já tem um domínio e hospedagem (ex: Apache/Nginx):

1.  Rode o comando:
    ```bash
    npm run build
    ```
2.  Uma pasta chamada `dist` será criada na raiz do projeto.
3.  Pegue **todo o conteúdo de dentro** da pasta `dist` e envie para a pasta `public_html` (ou `www`) da sua hospedagem via FTP ou Gerenciador de Arquivos.

---

## Dica Importante: Domínio Personalizado

Para usar um domínio próprio (ex: `www.m85performance.com.br`):
- Tanto na Vercel quanto na Netlify, vá em **Settings > Domains** e adicione seu domínio. Eles darão os DNS para configurar no Registro.br.
