# Resumo da Migração: Vite para Next.js (Projeto Inpe)

Este documento resume o progresso da migração do site "Barefoot Shoes" do ambiente Vite para **Next.js (App Router)**.

## 🚀 Trabalho Concluído

### 1. Estrutura e Configuração
- **Novo Projeto criado:** Pasta `inpe` inicializada com a estrutura básica do Next.js.
- **Configurações:** `next.config.mjs` configurado para desativar a otimização de imagens (`unoptimized: true`) para compatibilidade direta com os assets existentes.
- **Estilos Globais:** Migração completa do `index.css` para `src/app/globals.css`, preservando a paleta de cores e o design system.

### 2. Gestão de Assets
- **Pasta Public:** Mudança de todos os assets (`logo.png`, `founders.png`, vídeos, modelos 3D e imagens de história) para o diretório `/public` do Next.js.
- **Banco de Dados (Mock):** Refatoração de `src/data/products.js` para utilizar caminhos estáticos da pasta public, eliminando a dependência do `import.meta.glob` do Vite.

### 3. Componentes e Páginas (App Router)
Foram criados os componentes principais e as rotas utilizando a arquitetura de **Client Components** para manter as animações (Framer Motion) e lógica interativa:

- **Componentes Estruturais:**
  - `Header` e `Footer` (Adaptados para Next.js).
  - `Layout` global para consistência entre páginas.
  - `ModelViewer` (3D com `@react-three/fiber` e `use client`).
  - `ProductCard` e `FilterSidebar`.

- **Páginas e Rotas:**
  - `Home` (`/`) com Hero animado, carrosséis de produtos e seções sazonais.
  - `Loja` (`/loja`) com sistema de filtragem dinâmico por categoria, preço e tamanhos.
  - `Nossa História` (`/historia`) com seções de conteúdo e estatísticas.
  - `Contactos` (`/contactos`) com formulário e mapa integrado.
  - `Guia de Tamanhos` (`/guia-tamanhos`) com tabelas comparativas.
  - `Produto` (Página de detalhe dinâmica pronta para implementação).

### 4. Automatização de Escrita
- Foram utilizados scripts `.cjs` na pasta `inpe_files/` para garantir a escrita correta de todos os ficheiros no sistema de ficheiros do Windows, contornando limitações de permissões.

---
**Status Atual:** A estrutura base, páginas principais e lógica de componentes estão migradas. O projeto está pronto para a fase de testes de execução (`npm run dev`) e ajustes finos de UI no novo ambiente.
