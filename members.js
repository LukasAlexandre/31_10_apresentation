/* Slide 07 — painel expandido da liderança.
   Conteúdo extraído de lktechnologiesbrasil.com (seção Liderança).
   tip: legenda exibida ao passar o mouse, focar ou tocar no box (id · título · descrição · referência). */
(function () {
  "use strict";

  var MEMBERS = {
    lukas: {
      name: "Lukas Alexandre Rosa",
      area: "Fundador & Software Architect",
      did: [
        {
          text: "Produto, software, automação e inteligência artificial",
          tip: {
            id: "Atuação", title: "Interseção de áreas",
            desc: "Atua na interseção entre produto, software, automação e inteligência artificial para transformar problemas reais em soluções digitais eficientes.",
            ref: "lktechnologiesbrasil.com · Liderança"
          }
        },
        {
          text: "Visão técnica, experiência operacional e mentalidade empreendedora",
          tip: {
            id: "Trajetória", title: "Combinação de visões",
            desc: "Sua trajetória combina visão técnica, experiência operacional e mentalidade empreendedora.",
            ref: "lktechnologiesbrasil.com · Liderança"
          }
        },
        {
          text: "Organização, performance e inovação aplicada",
          tip: {
            id: "Foco", title: "Como lidera a empresa",
            desc: "Lidera a LK com foco em organização, performance e inovação aplicada, construindo sistemas que simplificam processos e fortalecem negócios.",
            ref: "lktechnologiesbrasil.com · Liderança"
          }
        }
      ],
      how: "Constrói sistemas que simplificam processos, fortalecem negócios e geram valor de forma prática para cada cliente.",
      why: "Transforma problemas reais da operação em soluções digitais eficientes."
    },
    leonardo: {
      name: "Leonardo Silva Kirime",
      area: "Fundador & Security Developer",
      did: [
        {
          text: "Desenvolvimento de software e cibersegurança",
          tip: {
            id: "Atuação", title: "Software e segurança",
            desc: "Combina desenvolvimento de software, cibersegurança e visão estratégica para construir soluções digitais confiáveis, escaláveis e seguras.",
            ref: "lktechnologiesbrasil.com · Liderança"
          }
        },
        {
          text: "Precisão técnica e proteção dos dados",
          tip: {
            id: "Princípio", title: "Sistemas mais robustos",
            desc: "Sua atuação é guiada pela precisão técnica, pela proteção dos dados e pela busca constante por sistemas mais robustos.",
            ref: "lktechnologiesbrasil.com · Liderança"
          }
        },
        {
          text: "Olhar para o universo jurídico e a advocacia",
          tip: {
            id: "Segmento", title: "Rotina da advocacia",
            desc: "Apaixonado pelo universo jurídico, enxerga na tecnologia uma forma de fortalecer processos, proteger informações e criar soluções inteligentes para negócios que exigem organização, segurança e responsabilidade.",
            ref: "lktechnologiesbrasil.com · Liderança"
          }
        }
      ],
      how: "Aplica segurança desde a base de cada projeto, com arquitetura confiável e escalável.",
      why: "Protege informações e dá responsabilidade e confiança às soluções entregues."
    }
  };

  var STATUS_LABEL = { done: "Integrado", review: "Em revisão" };

  var modal = document.getElementById("member-modal");
  var body = document.getElementById("member-modal-body");
  var panel = modal && modal.querySelector(".member-modal__panel");
  var cards = document.querySelectorAll("[data-member]");
  if (!modal || !body || typeof modal.showModal !== "function") return;

  var lastCard = null;
  var current = null;

  // ---------- Legenda (tooltip) dos boxes "Atuação" ----------
  // Fica FORA do painel do modal, de preferência à esquerda, alinhada ao box e ligada a ele
  // por uma linha com seta (SVG). Os elementos ficam dentro do <dialog> e não no body: o
  // modal aberto ocupa a camada superior (top layer), e nada fora dele aparece por cima.
  // Abre por hover, foco de teclado ou toque.
  var SVG_NS = "http://www.w3.org/2000/svg";
  var tip = document.createElement("div");
  tip.className = "member-tip";
  tip.id = "member-tip";
  tip.setAttribute("role", "tooltip");
  tip.hidden = true;
  modal.appendChild(tip);

  var link = document.createElementNS(SVG_NS, "svg");
  link.setAttribute("class", "member-tip-link");
  link.setAttribute("aria-hidden", "true");
  link.innerHTML =
    '<defs><marker id="member-tip-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">' +
    '<path d="M0 0 L10 5 L0 10 z"></path></marker></defs>' +
    '<circle r="3"></circle><line marker-end="url(#member-tip-arrow)"></line>';
  link.style.display = "none";
  modal.appendChild(link);
  var linkLine = link.querySelector("line");
  var linkDot = link.querySelector("circle");

  var tipTarget = null;
  var lastPointer = "mouse";

  var EDGE = 8; // distância mínima da borda da tela
  var GAP = 28; // espaço entre a legenda e o painel (onde corre a linha)
  var MAX_W = 320;
  var MIN_W = 176;

  function position() {
    if (!tipTarget) return;
    var r = tipTarget.getBoundingClientRect();
    var p = panel.getBoundingClientRect();
    var vw = window.innerWidth;
    var vh = window.innerHeight;
    var spaceLeft = p.left - EDGE - GAP;
    var spaceRight = vw - p.right - EDGE - GAP;
    var side = spaceLeft >= spaceRight ? "left" : "right";
    var space = Math.max(spaceLeft, spaceRight);
    var cy = r.top + r.height / 2;
    var x1, y1, x2, y2, w, h, left, top;

    if (space >= MIN_W) {
      // Fora do modal, alinhada verticalmente ao centro do box.
      w = Math.min(MAX_W, space);
      tip.style.width = w + "px";
      tip.classList.toggle("member-tip--narrow", w < 240);
      h = tip.offsetHeight;
      left = side === "left" ? p.left - GAP - w : p.right + GAP;
      top = Math.max(EDGE, Math.min(cy - h / 2, vh - h - EDGE));
      x1 = side === "left" ? left + w : left;
      y1 = Math.max(top + 14, Math.min(cy, top + h - 14));
      x2 = side === "left" ? r.left - 3 : r.right + 3;
      y2 = cy;
    } else {
      // Tela estreita (celular): sem espaço fora do modal. Acima do box (ou abaixo), seta vertical.
      w = Math.min(MAX_W, vw - 2 * EDGE);
      tip.style.width = w + "px";
      tip.classList.remove("member-tip--narrow");
      h = tip.offsetHeight;
      left = Math.max(EDGE, Math.min(r.left, vw - w - EDGE));
      var above = r.top - h - 22 >= EDGE;
      top = above ? r.top - h - 22 : Math.min(r.bottom + 22, vh - h - EDGE);
      x1 = x2 = Math.max(left + 20, Math.min(r.left + 28, left + w - 20));
      y1 = above ? top + h : top;
      y2 = above ? r.top - 3 : r.bottom + 3;
    }

    tip.style.left = Math.round(left) + "px";
    tip.style.top = Math.round(top) + "px";
    link.setAttribute("viewBox", "0 0 " + vw + " " + vh);
    linkLine.setAttribute("x1", x1);
    linkLine.setAttribute("y1", y1);
    linkLine.setAttribute("x2", x2);
    linkLine.setAttribute("y2", y2);
    linkDot.setAttribute("cx", x1);
    linkDot.setAttribute("cy", y1);
  }

  function showTip(li) {
    var entry = current && current.did[Number(li.getAttribute("data-tip"))];
    if (!entry || !entry.tip) return;
    var t = entry.tip;
    tip.innerHTML =
      '<p class="member-tip__id">' + esc(t.id) + "</p>" +
      '<p class="member-tip__title">' + esc(t.title) + "</p>" +
      '<p class="member-tip__desc">' + esc(t.desc) + "</p>" +
      (t.ref ? '<p class="member-tip__ref">Referência: ' + esc(t.ref) + "</p>" : "");
    if (tipTarget && tipTarget !== li) tipTarget.removeAttribute("aria-describedby");
    tipTarget = li;
    li.setAttribute("aria-describedby", "member-tip");
    tip.hidden = false;
    link.style.display = "";
    tip.classList.remove("is-visible");
    link.classList.remove("is-visible");
    position();
    void tip.offsetWidth; // reinicia a transição de entrada
    tip.classList.add("is-visible");
    link.classList.add("is-visible");
    queueReposition(); // confirma a posição no próximo quadro, com o layout já assentado
  }

  function hideTip() {
    if (tipTarget) tipTarget.removeAttribute("aria-describedby");
    tipTarget = null;
    tip.classList.remove("is-visible");
    link.classList.remove("is-visible");
    tip.hidden = true;
    link.style.display = "none";
  }

  // Resize, zoom ou rolagem do painel: recalcula a posição em vez de esconder.
  var repositionQueued = false;
  function queueReposition() {
    if (!tipTarget || repositionQueued) return;
    repositionQueued = true;
    requestAnimationFrame(function () {
      repositionQueued = false;
      position();
    });
  }

  function tipBox(event) {
    return event.target.closest && event.target.closest("li[data-tip]");
  }

  body.addEventListener("pointerdown", function (event) {
    lastPointer = event.pointerType || "mouse";
  });
  document.addEventListener("keydown", function () {
    lastPointer = "keyboard";
  }, true);
  body.addEventListener("mouseover", function (event) {
    var li = tipBox(event);
    if (li && li !== tipTarget && lastPointer !== "touch") showTip(li);
  });
  body.addEventListener("mouseout", function (event) {
    var li = tipBox(event);
    if (li && li === tipTarget && !li.contains(event.relatedTarget) && lastPointer !== "touch") hideTip();
  });
  body.addEventListener("focusin", function (event) {
    var li = tipBox(event);
    if (li && lastPointer !== "touch") showTip(li);
  });
  body.addEventListener("focusout", function (event) {
    if (tipBox(event) === tipTarget) hideTip();
  });
  // Toque: um toque abre a legenda; tocar de novo no mesmo box ou fora dele fecha.
  body.addEventListener("click", function (event) {
    var li = tipBox(event);
    if (lastPointer !== "touch") return;
    if (li && li !== tipTarget) showTip(li);
    else hideTip();
  });
  panel.addEventListener("scroll", queueReposition, { passive: true });
  window.addEventListener("resize", queueReposition, { passive: true });
  // Fim da animação de abertura do modal e carregamento das fontes também movem o box.
  modal.addEventListener("animationend", queueReposition);
  if (document.fonts && document.fonts.addEventListener) document.fonts.addEventListener("loadingdone", queueReposition);

  function esc(text) {
    var div = document.createElement("div");
    div.textContent = text;
    return div.innerHTML;
  }

  function item(entry, i) {
    var tag = entry.status
      ? '<span class="member-tag member-tag--' + entry.status + '">' + STATUS_LABEL[entry.status] + "</span>"
      : "";
    var attrs = entry.tip ? ' tabindex="0" data-tip="' + i + '"' : "";
    return "<li" + attrs + "><span>" + esc(entry.text) + "</span>" + tag + "</li>";
  }

  function render(m) {
    current = m;
    hideTip();
    var extra = m.extra
      ? '<p class="member-modal__extra">Em andamento: ' + esc(m.extra.text) +
        ' <span class="member-tag member-tag--' + m.extra.status + '">' + STATUS_LABEL[m.extra.status] + "</span></p>"
      : "";
    body.innerHTML =
      '<p class="member-modal__eyebrow">Liderança</p>' +
      '<h2 class="member-modal__name" id="member-modal-name">' + esc(m.name) + "</h2>" +
      '<p class="member-modal__area">' + esc(m.area) + "</p>" +
      '<div class="member-modal__grid">' +
      '<section class="member-modal__col"><h3 class="member-modal__label">Atuação</h3>' +
      '<ol class="member-modal__list">' + m.did.map(item).join("") + "</ol>" + extra + "</section>" +
      '<section class="member-modal__col">' +
      '<h3 class="member-modal__label">Como atua</h3><p class="member-modal__text">' + esc(m.how) + "</p>" +
      '<h3 class="member-modal__label">Por que importa</h3><p class="member-modal__text member-modal__text--why">' + esc(m.why) + "</p>" +
      "</section></div>";
  }

  function clearSelected() {
    cards.forEach(function (c) {
      c.classList.remove("is-selected");
    });
  }

  function open(card) {
    var m = MEMBERS[card.getAttribute("data-member")];
    if (!m) return;
    if (modal.open) modal.close(); // nunca dois abertos ao mesmo tempo
    clearSelected();
    lastCard = card;
    render(m);
    card.classList.add("is-selected");
    document.documentElement.classList.add("member-open");
    modal.showModal();
    // Foco no painel (não no botão): Espaço/passador de slides não fecha o painel por acidente.
    panel.focus({ preventScroll: true });
  }

  // Limpeza feita direto em cada caminho de fechamento (o evento "close" do <dialog> é
  // assíncrono e pode atrasar com a aba em segundo plano). Idempotente.
  function cleanup() {
    if (modal.open) return;
    hideTip();
    document.documentElement.classList.remove("member-open");
    clearSelected();
    if (lastCard) lastCard.focus({ preventScroll: true });
    lastCard = null;
  }

  function close() {
    if (modal.open) modal.close();
    cleanup();
  }

  modal.addEventListener("close", cleanup);
  modal.addEventListener("cancel", function (event) {
    event.preventDefault();
    close();
  });

  modal.querySelector(".member-modal__close").addEventListener("click", close);

  // Clique fora do painel (no fundo escurecido) fecha.
  modal.addEventListener("click", function (event) {
    if (event.target === modal) close();
  });

  cards.forEach(function (card) {
    card.addEventListener("click", function () {
      open(card);
    });
    card.addEventListener("keydown", function (event) {
      if (event.key === "Enter" || event.key === " " || event.key === "Spacebar") {
        event.preventDefault();
        event.stopPropagation(); // não deixa o Espaço avançar o slide
        open(card);
      }
    });
  });

  // Com o painel aberto, as teclas de navegação do deck (main.js) não podem trocar de slide.
  var NAV_KEYS = ["ArrowDown", "ArrowUp", "PageDown", "PageUp", " ", "Spacebar", "Home", "End"];
  window.addEventListener(
    "keydown",
    function (event) {
      if (!modal.open) return;
      if (event.key === "Escape" || event.key === "Esc") {
        event.preventDefault();
        close();
      } else if (NAV_KEYS.indexOf(event.key) !== -1) {
        event.stopPropagation();
      }
    },
    true
  );
})();
