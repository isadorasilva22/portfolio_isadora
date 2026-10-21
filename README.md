# Portfólio — Isadora Silva

Site estático (HTML, CSS e JavaScript puro) que lista meus projetos, separados em
**Publicados** e **Não publicados**.

## Estrutura

```
index.html        Página principal
css/style.css     Estilos
js/projetos.js    ← LISTA DE PROJETOS (é só editar aqui)
js/main.js        Monta os cartões a partir da lista
img/              Prints/capas dos projetos (opcional)
```

## Adicionar ou editar um projeto

Abra `js/projetos.js` e copie um bloco existente:

```js
{
  titulo: "Nome do projeto",
  descricao: "O que ele faz, em uma ou duas frases.",
  publicado: false,              // true = Publicados | false = Não publicados
  status: "Em desenvolvimento",  // só para não publicados
  url: "https://...",            // link do site no ar (publicados)
  repositorio: "https://github.com/...", // opcional
  imagem: "img/meu-projeto.png", // opcional
  tags: ["HTML", "CSS"],
  emoji: "🚀",
},
```

- **`imagem`** → print do projeto usado como prévia no cartão. Salve o print em
  `img/` (de preferência na proporção 16:10, ex.: 800×500) e informe o caminho.
- **Sem `imagem`** → o cartão mostra uma capa colorida com o emoji.
- As tags viram automaticamente os botões de filtro no topo.

## Ver no computador

Basta abrir o `index.html` no navegador.

## Publicar no GitHub Pages

1. Crie um repositório no GitHub (ex.: `portfolio`) e envie os arquivos:
   ```bash
   git add .
   git commit -m "Portfólio"
   git branch -M main
   git remote add origin https://github.com/isadorasilva22/portfolio.git
   git push -u origin main
   ```
2. No repositório: **Settings → Pages → Source: Deploy from a branch → `main` / `(root)`**.
3. O site ficará em `https://isadorasilva22.github.io/portfolio/`.
   (Se o repositório se chamar `isadorasilva22.github.io`, o endereço vira `https://isadorasilva22.github.io/`.)
