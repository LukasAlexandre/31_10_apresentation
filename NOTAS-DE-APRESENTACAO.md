# Notas de apresentação — LK Technologies Brasil

Alinhamento estratégico · 31 de outubro de 2026 · Lukas Alexandre Rosa & Leonardo Silva Kirime

> Gerado a partir de `notes.js` (`node tools/gerar-notas.js`). Durante a apresentação, pressione **N** para ver as notas do slide atual.

## 01 · Abertura

**Objetivo:** Abrir a conversa e deixar claro que é uma reunião de alinhamento entre sócios, não uma apresentação para cliente.

**O que dizer:** Leo, a ideia é a gente olhar juntos onde a LK estava, o que mudou e o que precisa decidir daqui pra frente. Vou ser direto, inclusive nas partes comerciais que não estão boas.

**Destaques**
- Reunião só entre sócios.
- Tom honesto: o que evoluiu e o que ainda está aberto.

**Para discutir**
- Tem algum assunto que você quer garantir que a gente discuta hoje?

## 02 · De onde partimos

**Objetivo:** Reconhecer os problemas anteriores sem apontar culpados.

**O que dizer:** A gente sempre soube desenvolver. O que faltava era organização: muita coisa dependia de uma pessoa, difícil saber o andamento em tempo real e o planejamento não tinha padrão. O caso da Líder Prime com o Davi mostrou isso. A percepção é que a gente poderia ter conduzido e acompanhado melhor.

**Destaques**
- Não é culpa do cliente nem falha técnica específica — é maturidade de processo.
- A tabela mostra o contraste entre como era e o que uma operação profissional pede.

**Para discutir**
- Você concorda com esse diagnóstico? Faltou alguma dor que você sentiu na prática?

## 03 · Maturidade do desenvolvimento

**Objetivo:** Mostrar a evolução do processo sem exagerar o que já está pronto.

**O que dizer:** Hoje a gente planeja, abre issue no GitHub, desenvolve, valida e registra o histórico. Entrega e acompanhamento ainda estão amadurecendo. Nada aqui está totalmente automatizado.

**Destaques**
- Etapas marcadas como 'em uso' x 'amadurecendo' — ajustar na reunião se o Leo discordar.
- Rastreabilidade ajuda a decidir com mais segurança.

**Para discutir**
- Concorda com o que marquei como em uso e como amadurecendo?
- Qual etapa você priorizaria melhorar primeiro?

## 04 · A mudança de mentalidade

**Objetivo:** Apresentar a pergunta que passa a guiar o que a gente desenvolve: compensa?

**O que dizer:** Antes a gente via o que dava pra construir e construía. Agora a pergunta é outra: que problema isso resolve, quem precisa, alguém paga, quanto custa manter. É sair de só implementar para pensar em produto e negócio.

**Destaques**
- Este é um dos slides mais importantes.
- As seis perguntas podem virar um checklist para novos projetos.

**Para discutir**
- Essas seis perguntas são suficientes? Falta alguma?
- Topa usar isso como critério antes de começar qualquer produto novo?

## 05 · Nova organização do portfólio

**Objetivo:** Propor a separação entre ferramentas internas (LKR Lab) e produtos comerciais.

**O que dizer:** Proposta: duas gavetas. No LKR Lab ficam as ferramentas que servem à própria LK — LK System, Vaultify, LK Office. Elas podem evoluir sem virar produto agora. Em produtos comerciais entram só os que passarem por validação de mercado. O LK Wallet é candidato, mas ainda não está pronto nem validado como SaaS.

**Destaques**
- É uma proposta de organização, ainda não decidida.
- Vaultify permanece interno nesta fase.
- LK Wallet: não apresentar como lançado.

**Para discutir**
- Concorda com a divisão em LKR Lab e produtos comerciais?
- O LK Wallet merece uma validação de mercado agora ou depois?

## 06 · Evolução do LK System

**Objetivo:** Mostrar o estágio real de cada módulo.

**O que dizer:** O LK System está sendo refeito para ser mais útil no dia a dia. Central de Módulos e Enterprise Glass dão a navegação e a identidade. Gestão de Clientes V2 está em finalização, com pendências. O Cliente 360° está em desenvolvimento e a Gestão de Projetos V2 ainda é planejamento.

**Destaques**
- Finalização, desenvolvimento e planejamento são coisas diferentes — não misturar.
- Sem percentuais de conclusão: não temos esse dado confirmado.

**Para discutir**
- Quais pendências da Gestão de Clientes V2 bloqueiam o encerramento?
- Gestão de Projetos V2 entra antes ou depois de reativar o comercial?

## 07 · Planejamento por frente

**Objetivo:** Mostrar ao Leo, com percentuais, onde está cada frente do LK System, sem confundir desenvolvido com entregue.

**O que dizer:** Separei em três frentes. O que já foi: a refatoração do login e da Central, mergeadas. Em desenvolvimento: Gestão e Cadastro de Clientes V2, com 8 de 11 etapas mergeadas, mas nenhuma validada em Production ainda. O que vem depois: a ficha 360° já tem 11 de 24 etapas desenvolvidas em PRs rascunho, projetos ainda é planejamento e a próxima página usável e o LK Clients ainda precisam ser mapeados.

**Destaques**
- Método: etapas mergeadas na Master ÷ etapas do épico (issues e PRs do GitHub, posição de 31/10/2026).
- Só 3 de 131 issues estão fechadas porque elas só fecham após validação em Production: o GitHub subestima o que já está mergeado.
- LKR Server (projeto Lkr-Server, 16 épicos E01–E16 e 132 issues): 0 concluídas, 37 em revisão, 27 em andamento, 12 bloqueadas, 56 a fazer. É fase de planejamento e documentação, ainda sem hospedagem concluída. Não entra no 73%, que é só de Clientes.
- A Central está mergeada atrás de flag (OWNER/ADMIN); as 32 issues EG ainda estão abertas no GitHub.

**Para discutir**
- Concorda em medir por etapa mergeada e não por issue fechada?
- Quando validamos Gestão de Clientes V2 em Production?
- Qual será a próxima página usável, possivelmente comercial?

## 08 · Ecossistema e automação

**Objetivo:** Situar as iniciativas de apoio ao LK System sem prometer o que ainda não existe.

**O que dizer:** Em paralelo temos o LK Identity para login e cadastro centralizados, o LK Office para escritório virtual e automação de tarefas, e o LKR Server como infraestrutura própria. Tudo isso reduz trabalho manual, mas está em desenvolvimento — o Server, por exemplo, é parcial.

**Destaques**
- Não afirmar integrações que ainda não existem.
- Automações do LK Office: confirmar no código antes de dizer que estão prontas.

**Para discutir**
- Dessas três frentes, qual traz mais ganho para a operação agora?

## 09 · O desenvolvimento na prática

**Objetivo:** Mostrar interfaces reais, não só planejamento.

**O que dizer:** Aqui é a comparação da identidade visual. À esquerda, a antiga: o painel escuro, aqui na tela de clientes. À direita, a nova: a Central de Módulos em Enterprise Glass V2, clara e com vidro. Tudo rodando local, com dados de demonstração.

**Destaques**
- Capturas reais do LK System rodando em ambiente local, com dados de demonstração (zeros são o banco local vazio, não números da empresa).
- O módulo de clientes ainda aparece na identidade antiga: a migração para o Enterprise Glass V2 está em andamento.

**Para discutir**
- Quais módulos migram para a nova identidade primeiro?

## 10 · Situação comercial

**Objetivo:** Expor com transparência o principal desafio.

**O que dizer:** Vou ser sincero: hoje a gente tem zero clientes ativos. A Bruna tem MVP pronto e uma oportunidade, mas eu deixei o contato parar — isso é um ponto de melhoria meu. A Líder Prime ficou como aprendizado e a migração pra Kenlo. Já fizemos prospecção com Barcellos, Belena e APEX, mas não tenho contrato fechado pra citar.

**Destaques**
- 0 clientes ativos é o destaque do slide.
- Não afirmar contrato fechado nem receita não confirmada.
- Tom construtivo, sem dramatizar.

**Para discutir**
- Qual público a gente deve priorizar para voltar a vender?
- Quem assume a retomada do contato com a Bruna e até quando?

## 11 · Parcerias e cenário atual

**Objetivo:** Atualizar o status das parcerias e a visão financeira, sem tratar nada como fechado.

**O que dizer:** Com o Lucas / Soluções de TI, estamos aguardando a assinatura do contrato; a divisão deve considerar a contribuição de cada um. Com o Thomas / Pigmentare, aguardamos o retorno da proposta — ainda sem sinal positivo definitivo. Sobre o financeiro, precisamos atualizar caixa, custos e obrigações.

**Destaques**
- Nenhuma parceria está formalizada.
- O valor de cerca de R$ 3 mil em obrigações citado em setembro é antigo e não foi atualizado — não usar como saldo atual até confirmar.

**Para discutir**
- Qual é o saldo e as obrigações reais hoje?
- Qual a nossa posição se o contrato com a Pigmentare não vier?

## 12 · Próxima fase da LK

**Objetivo:** Fechar com decisões e responsáveis.

**O que dizer:** Quatro frentes: consolidar o desenvolvimento, reativar o comercial, validar produtos e alinhar a sociedade. Nós amadurecemos o jeito de desenvolver; agora é transformar isso em resultado. Fecho com a pergunta: qual vai ser a nossa prioridade nos próximos 30 dias?

**Destaques**
- Deixar a pergunta final na tela e abrir a conversa.
- Sair da reunião com responsável e meta para cada frente.

**Para discutir**
- Qual é a prioridade número um para os próximos 30 dias?
- Quem é responsável por cada frente e qual a meta mensurável?
