/* Notas de apresentação (tecla N) + pequenos comportamentos da página.
   As notas ficam separadas do conteúdo dos slides: edite só o objeto NOTES abaixo.
   Versão para leitura/impressão: NOTAS-DE-APRESENTACAO.md (gerada a partir deste arquivo). */
(function () {
  "use strict";

  var NOTES = [
    {
      title: "Abertura",
      objetivo: "Abrir a conversa e deixar claro que é uma reunião de alinhamento entre sócios, não uma apresentação para cliente.",
      fala: "Leo, a ideia é a gente olhar juntos onde a LK estava, o que mudou e o que precisa decidir daqui pra frente. Vou ser direto, inclusive nas partes comerciais que não estão boas.",
      destaque: ["Reunião só entre sócios.", "Tom honesto: o que evoluiu e o que ainda está aberto."],
      perguntas: ["Tem algum assunto que você quer garantir que a gente discuta hoje?"]
    },
    {
      title: "De onde partimos",
      objetivo: "Reconhecer os problemas anteriores sem apontar culpados.",
      fala: "A gente sempre soube desenvolver. O que faltava era organização: muita coisa dependia de uma pessoa, difícil saber o andamento em tempo real e o planejamento não tinha padrão. O caso da Líder Prime com o Davi mostrou isso. A percepção é que a gente poderia ter conduzido e acompanhado melhor.",
      destaque: ["Não é culpa do cliente nem falha técnica específica — é maturidade de processo.", "A tabela mostra o contraste entre como era e o que uma operação profissional pede."],
      perguntas: ["Você concorda com esse diagnóstico? Faltou alguma dor que você sentiu na prática?"]
    },
    {
      title: "Maturidade do desenvolvimento",
      objetivo: "Mostrar a evolução do processo sem exagerar o que já está pronto.",
      fala: "Hoje a gente planeja, abre issue no GitHub, desenvolve, valida e registra o histórico. Entrega e acompanhamento ainda estão amadurecendo. Nada aqui está totalmente automatizado.",
      destaque: ["Etapas marcadas como 'em uso' x 'amadurecendo' — ajustar na reunião se o Leo discordar.", "Rastreabilidade ajuda a decidir com mais segurança."],
      perguntas: ["Concorda com o que marquei como em uso e como amadurecendo?", "Qual etapa você priorizaria melhorar primeiro?"]
    },
    {
      title: "A mudança de mentalidade",
      objetivo: "Apresentar a pergunta que passa a guiar o que a gente desenvolve: compensa?",
      fala: "Antes a gente via o que dava pra construir e construía. Agora a pergunta é outra: que problema isso resolve, quem precisa, alguém paga, quanto custa manter. É sair de só implementar para pensar em produto e negócio.",
      destaque: ["Este é um dos slides mais importantes.", "As seis perguntas podem virar um checklist para novos projetos."],
      perguntas: ["Essas seis perguntas são suficientes? Falta alguma?", "Topa usar isso como critério antes de começar qualquer produto novo?"]
    },
    {
      title: "Nova organização do portfólio",
      objetivo: "Propor a separação entre ferramentas internas (LKR Lab) e produtos comerciais.",
      fala: "Proposta: duas gavetas. No LKR Lab ficam as ferramentas que servem à própria LK — LK System, Vaultify, LK Office. Elas podem evoluir sem virar produto agora. Em produtos comerciais entram só os que passarem por validação de mercado. O LK Wallet é candidato, mas ainda não está pronto nem validado como SaaS.",
      destaque: ["É uma proposta de organização, ainda não decidida.", "Vaultify permanece interno nesta fase.", "LK Wallet: não apresentar como lançado."],
      perguntas: ["Concorda com a divisão em LKR Lab e produtos comerciais?", "O LK Wallet merece uma validação de mercado agora ou depois?"]
    },
    {
      title: "Evolução do LK System",
      objetivo: "Mostrar o estágio real de cada módulo.",
      fala: "O LK System está sendo refeito para ser mais útil no dia a dia. Central de Módulos e Enterprise Glass dão a navegação e a identidade. Gestão de Clientes V2 está em finalização, com pendências. O Cliente 360° está em desenvolvimento e a Gestão de Projetos V2 ainda é planejamento.",
      destaque: ["Finalização, desenvolvimento e planejamento são coisas diferentes — não misturar.", "Sem percentuais de conclusão: não temos esse dado confirmado."],
      perguntas: ["Quais pendências da Gestão de Clientes V2 bloqueiam o encerramento?", "Gestão de Projetos V2 entra antes ou depois de reativar o comercial?"]
    },
    {
      title: "Ecossistema e automação",
      objetivo: "Situar as iniciativas de apoio ao LK System sem prometer o que ainda não existe.",
      fala: "Em paralelo temos o LK Identity para login e cadastro centralizados, o LK Office para escritório virtual e automação de tarefas, e o LKR Server como infraestrutura própria. Tudo isso reduz trabalho manual, mas está em desenvolvimento — o Server, por exemplo, é parcial.",
      destaque: ["Não afirmar integrações que ainda não existem.", "Automações do LK Office: confirmar no código antes de dizer que estão prontas."],
      perguntas: ["Dessas três frentes, qual traz mais ganho para a operação agora?"]
    },
    {
      title: "O desenvolvimento na prática",
      objetivo: "Mostrar interfaces reais, não só planejamento.",
      fala: "Aqui é o que já aparece na tela, rodando local com dados de demonstração. Central de Módulos (Enterprise Glass V2), lista de clientes e a ficha do cliente 360°, que ainda está em desenvolvimento.",
      destaque: ["Capturas reais do LK System rodando em ambiente local, com dados de demonstração (zeros são o banco local vazio, não números da empresa).", "Identificar o 360° como protótipo/em desenvolvimento."],
      perguntas: ["Falta mostrar alguma tela que você considera importante?"]
    },
    {
      title: "Situação comercial",
      objetivo: "Expor com transparência o principal desafio.",
      fala: "Vou ser sincero: hoje a gente tem zero clientes ativos. A Bruna tem MVP pronto e uma oportunidade, mas eu deixei o contato parar — isso é um ponto de melhoria meu. A Líder Prime ficou como aprendizado e a migração pra Kenlo. Já fizemos prospecção com Barcellos, Belena e APEX, mas não tenho contrato fechado pra citar.",
      destaque: ["0 clientes ativos é o destaque do slide.", "Não afirmar contrato fechado nem receita não confirmada.", "Tom construtivo, sem dramatizar."],
      perguntas: ["Qual público a gente deve priorizar para voltar a vender?", "Quem assume a retomada do contato com a Bruna e até quando?"]
    },
    {
      title: "Parcerias e cenário atual",
      objetivo: "Atualizar o status das parcerias e a visão financeira, sem tratar nada como fechado.",
      fala: "Com o Lucas / Soluções de TI, estamos aguardando a assinatura do contrato; a divisão deve considerar a contribuição de cada um. Com o Thomas / Pigmentare, aguardamos o retorno da proposta — ainda sem sinal positivo definitivo. Sobre o financeiro, precisamos atualizar caixa, custos e obrigações.",
      destaque: ["Nenhuma parceria está formalizada.", "O valor de cerca de R$ 3 mil em obrigações citado em setembro é antigo e não foi atualizado — não usar como saldo atual até confirmar."],
      perguntas: ["Qual é o saldo e as obrigações reais hoje?", "Qual a nossa posição se o contrato com a Pigmentare não vier?"]
    },
    {
      title: "Próxima fase da LK",
      objetivo: "Fechar com decisões e responsáveis.",
      fala: "Quatro frentes: consolidar o desenvolvimento, reativar o comercial, validar produtos e alinhar a sociedade. Nós amadurecemos o jeito de desenvolver; agora é transformar isso em resultado. Fecho com a pergunta: qual vai ser a nossa prioridade nos próximos 30 dias?",
      destaque: ["Deixar a pergunta final na tela e abrir a conversa.", "Sair da reunião com responsável e meta para cada frente."],
      perguntas: ["Qual é a prioridade número um para os próximos 30 dias?", "Quem é responsável por cada frente e qual a meta mensurável?"]
    }
  ];

  var panel = document.getElementById("notes");
  var titleEl = document.getElementById("notes-title");
  var bodyEl = document.getElementById("notes-body");
  var closeBtn = document.getElementById("notes-close");
  var current = 1;

  function esc(s) {
    return String(s).replace(/[&<>]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;" }[c]; });
  }
  function list(items) {
    return "<ul>" + items.map(function (i) { return "<li>" + esc(i) + "</li>"; }).join("") + "</ul>";
  }
  function render() {
    var n = NOTES[current - 1];
    if (!n || !panel) return;
    titleEl.textContent = String(current).padStart(2, "0") + " · " + n.title;
    bodyEl.innerHTML =
      "<h4>Objetivo</h4><p>" + esc(n.objetivo) + "</p>" +
      "<h4>O que dizer</h4><p>" + esc(n.fala) + "</p>" +
      "<h4>Destaques</h4>" + list(n.destaque) +
      "<h4>Para discutir</h4>" + list(n.perguntas);
  }
  function toggle(force) {
    if (!panel) return;
    var show = typeof force === "boolean" ? force : panel.hidden;
    panel.hidden = !show;
    if (show) render();
  }

  window.addEventListener("keydown", function (e) {
    if (e.ctrlKey || e.metaKey || e.altKey) return;
    if (e.key === "n" || e.key === "N") toggle();
    else if (e.key === "Escape") toggle(false);
  });
  if (closeBtn) closeBtn.addEventListener("click", function () { toggle(false); });

  // Slide atual (para as notas) e esconder a marca fixa enquanto a abertura está na tela.
  var sections = Array.prototype.slice.call(document.querySelectorAll("[data-block]"));
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        current = Number(en.target.getAttribute("data-block"));
        document.body.classList.toggle("on-hero", current === 1);
        if (panel && !panel.hidden) render();
      });
    }, { threshold: 0.55 });
    sections.forEach(function (s) { io.observe(s); });
  }
  document.body.classList.add("on-hero");

  // Capturas reais do slide 08. Ao salvar um arquivo em assets/telas/, adicione o nome aqui
  // (evita requisições a arquivos inexistentes). Sem o nome na lista, o slide mostra o espaço reservado.
  var TELAS_DISPONIVEIS = [
    "central-de-modulos.png",
    "gestao-de-clientes-v2.png",
    "cliente-dedicado-360.png"
  ];
  Array.prototype.forEach.call(document.querySelectorAll(".shot[data-src]"), function (fig) {
    var src = fig.getAttribute("data-src");
    if (TELAS_DISPONIVEIS.indexOf(src.split("/").pop()) === -1) return;
    var img = new Image();
    img.decoding = "async";
    img.alt = fig.querySelector("figcaption").textContent.trim();
    img.onload = function () {
      var frame = fig.querySelector(".shot__frame");
      frame.innerHTML = "";
      frame.appendChild(img);
      fig.classList.add("has-img");
    };
    img.src = src;
  });
})();
