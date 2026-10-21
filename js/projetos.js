/* =========================================================================
   LISTA DE PROJETOS DO PORTFÓLIO
   -------------------------------------------------------------------------
   Para adicionar um projeto, copie um dos blocos { ... } abaixo e ajuste.

   Campos:
     titulo      (obrigatório) Nome do projeto
     descricao   (obrigatório) Uma ou duas frases sobre o projeto
     publicado   (obrigatório) true  = aparece em "Publicados"
                               false = aparece em "Não publicados"
     url         Link do site no ar (só para publicados)
     repositorio Link do código no GitHub (opcional)
     imagem      Print do projeto usado como prévia, ex.: "img/brecho.png"
                 (sem imagem, o cartão mostra uma capa colorida com o emoji)
     imagemInteira  true = mostra a imagem inteira, sem cortar (bom para
                 imagens quadradas de resumo)
     tags        Tecnologias / tipo do projeto, ex.: ["HTML", "CSS"]
     status      Texto curto para não publicados, ex.: "Em desenvolvimento"
     emoji       Ícone da capa colorida (opcional)
   ========================================================================= */

const PROJETOS = [
  // ----------------------------------------------------------------- Publicados
  {
    titulo: "Docinhos das Isas",
    descricao:
      "Catálogo de doces com fotos e valores, e uma rifa online para ajudar a pagar o nosso casamento.",
    publicado: true,
    url: "https://docinhosdasisas.netlify.app/",
    imagem: "img/docinhos-das-isas.png",
    tags: ["HTML", "CSS", "JavaScript", "Netlify"],
    emoji: "🍬",
  },
  {
    titulo: "Brechó Sandrinha",
    descricao:
      "Site de brechó com catálogo filtrável por categoria, cor e estado da peça, com compartilhamento direto para o Instagram.",
    publicado: true,
    url: "https://isadorasilva22.github.io/BrechoSandrinha/",
    repositorio: "https://github.com/isadorasilva22/BrechoSandrinha",
    imagem: "img/brecho-sandrinha.png",
    tags: ["HTML", "CSS", "JavaScript", "GitHub Pages"],
    emoji: "👗",
  },
  {
    titulo: "Inventário de Bichinhos 3D",
    descricao:
      "Inventário digital dos bichinhos impressos em 3D da Isa Vecchio, organizado por categorias e com pesquisa rápida.",
    publicado: true,
    url: "https://isadorasilva22.github.io/catalogo_isavecc/",
    repositorio: "https://github.com/isadorasilva22/catalogo_isavecc",
    imagem: "img/bichinhos-3d.png",
    tags: ["HTML", "CSS", "JavaScript", "GitHub Pages"],
    emoji: "🦖",
  },

  // ------------------------------------------------------------ Não publicados
  {
    titulo: "Fluxy",
    descricao:
      "Controle financeiro pessoal com registro de receitas e despesas, cálculo automático de saldo e limite, gráficos e resumo de faturas.",
    publicado: false,
    status: "Não publicado",
    repositorio: "https://github.com/isadorasilva22/Fluxy",
    imagem: "img/fluxy.png",
    imagemInteira: true,
    tags: ["Python", "Flask", "PostgreSQL", "JavaScript", "Chart.js"],
    emoji: "💰",
  },
  {
    titulo: "Dashboard TTManager",
    descricao:
      "Painel de auditoria de um sistema interno: revisão de telas com achados por severidade, padrões recorrentes, kanban de correções, wiki de funções e controle de uso.",
    publicado: false,
    status: "Uso interno",
    imagem: "img/dashboard-ttmanager.png",
    imagemInteira: true,
    tags: ["HTML", "CSS", "JavaScript", "PHP", "SQL Server"],
    emoji: "📊",
  },
];
