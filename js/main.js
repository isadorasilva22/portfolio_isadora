/* =========================================================================
   MONTAGEM DA PÁGINA
   Lê a lista PROJETOS (js/projetos.js) e desenha os cartões nas duas seções.
   ========================================================================= */

// Paleta usada nas capas coloridas (escolhida pelo nome do projeto)
const CORES_CAPA = ["#f4a6b8", "#a6c8f4", "#b8e0c2", "#f7d08a", "#c9b6f2", "#f2b89b"];

let filtroAtivo = "Todos";

//--------------------------------------------------------------------------
//  Utilitários
//--------------------------------------------------------------------------
function escaparHtml(texto) {
  const div = document.createElement("div");
  div.textContent = texto ?? "";
  return div.innerHTML;
}

function corDoProjeto(titulo) {
  let soma = 0;
  for (const letra of titulo) soma += letra.charCodeAt(0);
  return CORES_CAPA[soma % CORES_CAPA.length];
}

//--------------------------------------------------------------------------
//  Capa do cartão: print do projeto ou capa colorida
//--------------------------------------------------------------------------
function montarCapa(p) {
  if (p.imagem) {
    const classe = p.imagemInteira ? "capa__img capa__img--inteira" : "capa__img";
    // Imagem inteira: um fundo desfocado da própria imagem preenche as laterais
    const fundo = p.imagemInteira
      ? `<div class="capa__fundo" style="background-image:url('${escaparHtml(p.imagem)}')"></div>`
      : "";
    const img = `${fundo}<img class="${classe}" src="${escaparHtml(p.imagem)}" alt="Tela do projeto ${escaparHtml(p.titulo)}" loading="lazy" />`;
    // Nos publicados, clicar na imagem também abre o site
    return p.url
      ? `<a href="${escaparHtml(p.url)}" target="_blank" rel="noopener" tabindex="-1">${img}</a>`
      : img;
  }
  return `<div class="capa__cor" style="--cor:${corDoProjeto(p.titulo)}">
            <span>${escaparHtml(p.emoji || p.titulo.charAt(0))}</span>
          </div>`;
}

//--------------------------------------------------------------------------
//  Cartão de um projeto
//--------------------------------------------------------------------------
function montarCartao(p) {
  const tags = (p.tags || []).map((t) => `<li>${escaparHtml(t)}</li>`).join("");

  const selo = p.publicado
    ? `<span class="selo selo--no-ar">No ar</span>`
    : `<span class="selo">${escaparHtml(p.status || "Não publicado")}</span>`;

  const botoes = [
    p.url && `<a class="botao" href="${escaparHtml(p.url)}" target="_blank" rel="noopener">Visitar site ↗</a>`,
    p.repositorio && `<a class="botao botao--leve" href="${escaparHtml(p.repositorio)}" target="_blank" rel="noopener">Código</a>`,
  ].filter(Boolean).join("");

  return `
    <article class="cartao">
      <div class="capa">${montarCapa(p)}${selo}</div>
      <div class="cartao__corpo">
        <h3>${escaparHtml(p.titulo)}</h3>
        <p>${escaparHtml(p.descricao)}</p>
        <ul class="tags">${tags}</ul>
        ${botoes ? `<div class="cartao__botoes">${botoes}</div>` : ""}
      </div>
    </article>`;
}

//--------------------------------------------------------------------------
//  Desenha uma seção (publicados ou não publicados)
//--------------------------------------------------------------------------
function desenharLista(idLista, projetos, mensagemVazia) {
  const lista = document.getElementById(idLista);
  lista.innerHTML = projetos.length
    ? projetos.map(montarCartao).join("")
    : `<p class="vazio">${mensagemVazia}</p>`;
}

function desenharProjetos() {
  const visiveis = PROJETOS.filter(
    (p) => filtroAtivo === "Todos" || (p.tags || []).includes(filtroAtivo)
  );
  desenharLista("lista-publicados", visiveis.filter((p) => p.publicado), "Nenhum projeto publicado com esse filtro.");
  desenharLista("lista-nao-publicados", visiveis.filter((p) => !p.publicado), "Nenhum projeto não publicado com esse filtro.");
}

//--------------------------------------------------------------------------
//  Botões de filtro por tecnologia (gerados a partir das tags)
//--------------------------------------------------------------------------
function desenharFiltros() {
  const tags = [...new Set(PROJETOS.flatMap((p) => p.tags || []))].sort();
  const caixa = document.getElementById("filtros");

  caixa.innerHTML = ["Todos", ...tags]
    .map((t) => `<button type="button" class="filtro${t === filtroAtivo ? " ativo" : ""}" data-tag="${escaparHtml(t)}">${escaparHtml(t)}</button>`)
    .join("");

  caixa.onclick = (e) => {
    const botao = e.target.closest(".filtro");
    if (!botao) return;
    filtroAtivo = botao.dataset.tag;
    desenharFiltros();
    desenharProjetos();
  };
}

//--------------------------------------------------------------------------
//  Início
//--------------------------------------------------------------------------
document.getElementById("qtd-publicados").textContent = PROJETOS.filter((p) => p.publicado).length;
document.getElementById("qtd-nao-publicados").textContent = PROJETOS.filter((p) => !p.publicado).length;
desenharFiltros();
desenharProjetos();
