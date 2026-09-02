const modal=document.getElementById('modal'), modalContent=document.getElementById('modalContent');
const content={
explain:`<h2>Vamos entender juntos</h2><p>Qual matéria você não entendeu?</p><div class="choice"><button data-topic="math">📐 Frações</button><button>🧩 Problemas matemáticos</button><button>🔎 Outra matéria</button></div>`,
task:`<h2>Vamos fazer sua tarefa</h2><p>Você pode escrever a dúvida ou fotografar a atividade. O tutor deve explicar o caminho, não simplesmente entregar a resposta.</p><textarea placeholder="Escreva aqui a dúvida da tarefa..."></textarea><button class="modal-action">Pedir explicação guiada</button>`,
test:`<h2>Preparação para a prova</h2><p>Escolha como quer estudar:</p><div class="choice"><button data-modal-action="quiz">🎯 Criar quiz</button><button data-modal-action="summary">📚 Fazer resumo</button><button>🃏 Criar flashcards</button></div>`,
summary:`<h2>Seu resumo</h2><p>O conteúdo será organizado em ideias principais, exemplos e palavras-chave adequados ao nível do aluno.</p><textarea placeholder="Cole o conteúdo aqui..."></textarea><button class="modal-action">Gerar resumo</button>`,
mindmap:`<h2>Mapa mental</h2><p>Transforme uma matéria em um mapa visual com conceitos, conexões e palavras-chave.</p><button class="modal-action">Criar mapa de exemplo</button>`,
quiz:`<h2>Treino rápido</h2><p>Questão 1 de 5</p><p><b>Qual fração representa 3 partes de um total de 4?</b></p><div class="choice"><button>3/5</button><button>1/2</button><button>3/4</button></div>`,
math:`<h2>Frações na matemática</h2><p><b>Vamos começar pelo básico.</b></p><p>Imagine uma pizza dividida em 4 partes iguais. Se você tem 3 pedaços, você tem <b>3/4</b>.</p><div class="big-emoji">🍕</div><p>Agora tente: quanto é 2/3 + 1/6?</p><button class="modal-action">Quero tentar!</button>`,
report:`<h2>Relatório de aprendizagem</h2><p>Matemática aparece como principal ponto de atenção nesta semana.</p><div class="mini-progress"><i style="width:60%"></i></div><p><b>60%</b> de desempenho estimado nas atividades acompanhadas.</p><p>Principais dificuldades: frações e problemas matemáticos.</p>`,
passport:`<h2>Passaporte educacional</h2><p><b>Manu • 10 anos • 5º ano</b></p><p>Perfil pedagógico: recursos visuais, exemplos concretos e exercícios curtos.</p><p>Este perfil deve registrar preferências de aprendizagem e estratégias que funcionaram, não substituir avaliação clínica.</p>`,
docs:`<h2>Documentos da família</h2><div class="choice"><button>📄 PEI — arquivo PDF</button><button>📄 Relatório escolar — arquivo PDF</button><button>📄 Documento da família — arquivo PDF</button></div><p class="muted">Protótipo: os arquivos ainda não são enviados para um servidor.</p>`,
school:`<h2>Comunicação com a escola</h2><p><b>Próxima reunião pedagógica</b></p><p>05/09 às 14h00</p><p>Assunto: acompanhamento de matemática e estratégias de apoio.</p>`,
schoolStrategies:`<h2>Estratégias pedagógicas autorizadas</h2><div class="tag-list"><span>Instruções curtas</span><span>Recursos visuais</span><span>Exemplos concretos</span><span>Exercícios curtos</span><span>Prática guiada</span></div><p class="muted">A escola visualiza somente recomendações pedagógicas compartilhadas.</p>`,
schoolMessage:`<h2>Nova observação pedagógica</h2><textarea placeholder="Descreva uma observação sobre aprendizagem, participação ou atividade..."></textarea><button class="modal-action">Salvar observação</button>`,
psychologist:`<h2>Psicóloga — registro profissional</h2><p>Área para registrar laudos, análises, avaliações e evolução.</p><div class="choice"><button data-modal-action="newEvaluation">📝 Nova avaliação</button><button data-modal-action="newEvolution">📈 Registrar evolução</button><button data-modal-action="clinicalDocs">📁 Inserir documento</button></div><p class="privacy-note">Dados clínicos são sensíveis e não devem ser expostos à escola sem autorização adequada.</p>`,
therapist:`<h2>Terapeuta — registro profissional</h2><p>Área para registrar avaliações, estratégias terapêuticas e evolução.</p><div class="choice"><button data-modal-action="newEvaluation">📝 Nova avaliação</button><button data-modal-action="newEvolution">📈 Registrar evolução</button><button data-modal-action="clinicalDocs">📁 Inserir documento</button></div>`,
newEvaluation:`<h2>Nova avaliação</h2><label>Data</label><input type="date"><label>Tipo</label><select><option>Avaliação inicial</option><option>Avaliação de acompanhamento</option><option>Reavaliação</option></select><label>Registro profissional</label><textarea placeholder="Observações, análise e resultados..."></textarea><button class="modal-action">Salvar avaliação</button>`,
newEvolution:`<h2>Registrar evolução</h2><label>Data</label><input type="date"><label>Evolução observada</label><textarea placeholder="Descreva a evolução da criança..."></textarea><label>Recomendação pedagógica</label><textarea placeholder="O que pode ajudar no contexto escolar?"></textarea><button class="modal-action">Salvar evolução</button>`,
clinicalDocs:`<h2>Laudos e documentos</h2><button class="upload-box">＋ Selecionar arquivo PDF</button><div class="file-row">📄 Relatório_2026.pdf <span>Privado</span></div><div class="file-row">📄 Avaliação_acompanhamento.pdf <span>Compartilhado com família</span></div><p class="muted">No MVP real, os arquivos devem usar armazenamento seguro, controle de acesso e trilha de auditoria.</p>`,
sharing:`<h2>Permissões e compartilhamento</h2><div class="permission"><b>Família/responsável</b><span>Acesso aos registros autorizados</span><strong>Ativo</strong></div><div class="permission"><b>Psicóloga</b><span>Acesso aos registros profissionais próprios</span><strong>Ativo</strong></div><div class="permission"><b>Terapeuta</b><span>Acesso aos registros profissionais próprios</span><strong>Ativo</strong></div><div class="permission"><b>Escola</b><span>Somente recomendações pedagógicas autorizadas</span><strong>Limitado</strong></div>`,
aiTutor:`<h2>✦ Tutor IA</h2><p><b>Eu não vou só dar a resposta.</b> Vou tentar descobrir onde está a dificuldade e explicar de outra forma.</p><textarea placeholder="Ex.: não entendi como somar frações..."></textarea><button class="modal-action">Começar explicação</button><div class="ai-example"><b>Exemplo de retorno</b><p>Vamos por partes. Primeiro, vamos descobrir o que os denominadores representam...</p></div>`,
aiPlan:`<h2>🗓 Plano de estudo com IA</h2><p>Plano sugerido com base no desempenho simulado:</p><div class="plan"><b>Segunda</b><span>20 min — Frações</span><b>Quarta</b><span>15 min — Problemas</span><b>Sexta</b><span>20 min — Quiz + revisão</span></div>`,
aiSummary:`<h2>📚 Resumo com IA</h2><p>A IA identifica conceitos principais e transforma o conteúdo em uma explicação adequada ao aluno.</p><textarea placeholder="Cole o material da aula..."></textarea><button class="modal-action">Gerar resumo</button>`,
aiMindmap:`<h2>💡 Mapa mental com IA</h2><p>Exemplo: <b>Frações → numerador → denominador → equivalência → operações</b></p><div class="mindmap-demo"><span>FRAÇÕES</span><i>↙</i><i>↓</i><i>↘</i><small>Numerador</small><small>Denominador</small><small>Operações</small></div>`,
aiQuiz:`<h2>🎯 Quiz adaptativo</h2><p>O nível das próximas perguntas muda conforme o desempenho do aluno.</p><button class="modal-action">Começar quiz</button>`,
aiMath:`<h2>➗ Matemática com IA</h2><p>O tutor pode identificar etapas do raciocínio, apontar o erro e criar outra questão semelhante para prática.</p><button class="modal-action">Praticar agora</button>`,
portuguese:`<h2>Português</h2><p>Interpretação de texto, gramática e produção de texto.</p>`,
science:`<h2>Ciências</h2><p>Sistema Solar, corpo humano e ecossistemas.</p>`,
history:`<h2>História</h2><p>Brasil, Antiguidade e acontecimentos históricos.</p>`
};

function openModal(k){
  modalContent.innerHTML=content[k]||'<h2>Em construção</h2><p>Esta função será conectada ao backend e à IA no MVP de produção.</p>';
  modal.classList.add('open'); modal.setAttribute('aria-hidden','false');
}
function closeModal(){modal.classList.remove('open');modal.setAttribute('aria-hidden','true')}
document.querySelectorAll('[data-modal]').forEach(b=>b.onclick=()=>openModal(b.dataset.modal));
document.getElementById('closeModal').onclick=closeModal;
modal.onclick=e=>{if(e.target===modal)closeModal()};
modalContent.onclick=e=>{
  const topic=e.target.closest('[data-topic]'); if(topic) return openModal(topic.dataset.topic);
  const action=e.target.closest('[data-modal-action]');
  if(action){ const map={quiz:'quiz',summary:'summary',newEvaluation:'newEvaluation',newEvolution:'newEvolution',clinicalDocs:'clinicalDocs'}; if(map[action.dataset.modalAction]) openModal(map[action.dataset.modalAction]); }
};

document.querySelectorAll('.nav-item[data-view]').forEach(btn=>btn.onclick=()=>{
  document.querySelectorAll('.view').forEach(v=>v.classList.remove('active'));
  document.getElementById(btn.dataset.view).classList.add('active');
  document.querySelectorAll('.nav-item').forEach(n=>n.classList.remove('active')); btn.classList.add('active');
});

let parent=false, autism=false;

function showView(id){
  document.querySelectorAll('.view').forEach(v=>v.classList.remove('active'));
  const view=document.getElementById(id);
  if(view) view.classList.add('active');
  document.querySelectorAll('.nav-item').forEach(n=>n.classList.toggle('active', n.dataset.view===id));
  if(id==='professionalView'){ document.getElementById('professionalView').scrollIntoView({block:'start'}); }
}

document.querySelectorAll('.nav-item[data-view]').forEach(btn=>btn.onclick=()=>showView(btn.dataset.view));

document.querySelectorAll('[data-profile-view]').forEach(btn=>btn.onclick=()=>{
  showView(btn.dataset.profileView);
  const role=btn.dataset.roleSelect;
  if(role){
    document.querySelectorAll('.role-tab').forEach(t=>t.classList.toggle('active', t.dataset.role===role));
  }
});

document.getElementById('autismToggle').onclick=()=>{
  autism=!autism;
  const panel=document.getElementById('specialistPanel'), status=document.getElementById('autismStatus');
  panel.classList.toggle('hidden',!autism); document.getElementById('autismToggle').setAttribute('aria-pressed',String(autism));
  status.classList.toggle('enabled',autism);
  if(autism) { status.querySelector('p').textContent='Módulo de apoio especializado ativo. Acesso controlado por perfil.'; }
  else { status.querySelector('p').textContent='Ative somente quando aplicável para a criança.'; }
};
document.getElementById('studySearch').oninput=e=>{
  const q=e.target.value.toLowerCase();
  document.querySelectorAll('.subject-cards button').forEach(b=>b.style.display=b.innerText.toLowerCase().includes(q)?'block':'none');
};
document.querySelectorAll('.role-tab').forEach(btn=>btn.onclick=()=>{
  document.querySelectorAll('.role-tab').forEach(b=>b.classList.remove('active'));btn.classList.add('active');
  document.querySelector('.pro-icon').textContent=btn.dataset.role==='psych'?'🧠':'🧩';
});
document.getElementById('notifications').onclick=()=>openModal('school');

// Catálogo curricular do Aprende+ — base comum + componentes complementares comuns.
// A composição exata varia por rede, estado, escola e projeto pedagógico.
const subjectCatalog = [
  {id:'ei-escuta',name:'Escuta, fala, pensamento e imaginação',icon:'🗣️',stages:['infantil'],type:'base',desc:'Linguagem oral, escuta, histórias, expressão e imaginação.'},
  {id:'ei-corpo',name:'Corpo, gestos e movimentos',icon:'🤸',stages:['infantil'],type:'base',desc:'Movimento, coordenação, expressão corporal e exploração.'},
  {id:'ei-tracos',name:'Traços, sons, cores e formas',icon:'🎨',stages:['infantil'],type:'base',desc:'Artes, música, desenho, pintura, sons e formas.'},
  {id:'ei-eu',name:'O eu, o outro e o nós',icon:'👥',stages:['infantil'],type:'base',desc:'Identidade, convivência, respeito e relações.'},
  {id:'ei-espacos',name:'Espaços, tempos, quantidades, relações e transformações',icon:'🔢',stages:['infantil'],type:'base',desc:'Espaço, tempo, quantidade, natureza e transformações.'},
  {id:'portugues',name:'Língua Portuguesa',icon:'📖',stages:['ef1','ef2','em'],type:'base',desc:'Leitura, escrita, gramática, oralidade, literatura e produção textual.'},
  {id:'matematica',name:'Matemática',icon:'📐',stages:['ef1','ef2','em'],type:'base',desc:'Números, álgebra, geometria, medidas, estatística e probabilidade.'},
  {id:'ciencias',name:'Ciências',icon:'🔬',stages:['ef1','ef2'],type:'base',desc:'Vida, matéria, energia, Terra, ambiente, tecnologia e saúde.'},
  {id:'historia',name:'História',icon:'🏛️',stages:['ef1','ef2','em'],type:'base',desc:'Tempo histórico, sociedades, Brasil, mundo, cultura e cidadania.'},
  {id:'geografia',name:'Geografia',icon:'🌎',stages:['ef1','ef2','em'],type:'base',desc:'Espaço geográfico, território, natureza, população, economia e cartografia.'},
  {id:'arte',name:'Arte',icon:'🎭',stages:['ef1','ef2','em'],type:'base',desc:'Artes visuais, música, dança, teatro e processos de criação.'},
  {id:'educacao-fisica',name:'Educação Física',icon:'🏃',stages:['ef1','ef2','em'],type:'base',desc:'Esportes, jogos, danças, lutas, ginásticas, corpo e movimento.'},
  {id:'ingles',name:'Língua Inglesa',icon:'🇬🇧',stages:['ef2','em'],type:'base',desc:'Comunicação, leitura, escrita e cultura em língua inglesa.'},
  {id:'ensino-religioso',name:'Ensino Religioso',icon:'🕊️',stages:['ef1','ef2'],type:'base',desc:'Conhecimentos religiosos e não religiosos, diversidade e respeito.'},
  {id:'literatura',name:'Literatura',icon:'📚',stages:['ef2','em'],type:'private',desc:'Obras literárias, escolas literárias, leitura crítica e repertório.'},
  {id:'redacao',name:'Redação / Produção Textual',icon:'✍️',stages:['ef2','em'],type:'private',desc:'Argumentação, gêneros textuais, escrita, revisão e preparação para provas.'},
  {id:'espanhol',name:'Língua Espanhola',icon:'🇪🇸',stages:['ef2','em'],type:'private',desc:'Comunicação, leitura, escrita e cultura hispânica; oferta varia por escola.'},
  {id:'filosofia',name:'Filosofia',icon:'💭',stages:['ef2','em'],type:'private',desc:'Ética, lógica, conhecimento, política, pensamento e argumentação.'},
  {id:'sociologia',name:'Sociologia',icon:'🌐',stages:['ef2','em'],type:'private',desc:'Sociedade, cultura, trabalho, poder, desigualdades e cidadania.'},
  {id:'biologia',name:'Biologia',icon:'🧬',stages:['em'],type:'base',desc:'Citologia, genética, evolução, ecologia, fisiologia e biodiversidade.'},
  {id:'fisica',name:'Física',icon:'⚛️',stages:['em'],type:'base',desc:'Mecânica, energia, ondas, termologia, eletricidade e física moderna.'},
  {id:'quimica',name:'Química',icon:'⚗️',stages:['em'],type:'base',desc:'Matéria, transformações, estequiometria, soluções, química orgânica e ambiental.'},
  {id:'projeto-vida',name:'Projeto de Vida',icon:'🧭',stages:['ef2','em'],type:'private',desc:'Autoconhecimento, escolhas, futuro acadêmico, carreira e cidadania.'},
  {id:'educacao-financeira',name:'Educação Financeira',icon:'💰',stages:['ef1','ef2','em'],type:'private',desc:'Orçamento, consumo consciente, planejamento, juros e decisões financeiras.'},
  {id:'tecnologia',name:'Tecnologia e Cultura Digital',icon:'💻',stages:['ef1','ef2','em'],type:'private',desc:'Cidadania digital, ferramentas, segurança, informação e tecnologia.'},
  {id:'programacao',name:'Programação / Pensamento Computacional',icon:'👩‍💻',stages:['ef1','ef2','em'],type:'private',desc:'Lógica, algoritmos, programação, resolução de problemas e criação digital.'},
  {id:'robotica',name:'Robótica',icon:'🤖',stages:['ef1','ef2','em'],type:'private',desc:'Construção, automação, programação e resolução de desafios.'},
  {id:'empreendedorismo',name:'Empreendedorismo',icon:'🚀',stages:['ef2','em'],type:'private',desc:'Projetos, inovação, colaboração e solução de problemas.'},
  {id:'socioemocional',name:'Educação Socioemocional',icon:'🧠',stages:['ef1','ef2','em'],type:'private',desc:'Autoconhecimento, convivência, comunicação, autorregulação e decisões.'},
  {id:'atualidades',name:'Atualidades e Cidadania',icon:'📰',stages:['ef2','em'],type:'private',desc:'Temas contemporâneos, cidadania, sociedade, ciência e mundo do trabalho.'},
  {id:'prevestibular',name:'Preparação para Vestibulares e ENEM',icon:'🎯',stages:['em'],type:'private',desc:'Revisão integrada, simulados, redação e estratégia de prova.'},
  {id:'eletivas',name:'Eletivas / Itinerários Formativos',icon:'🧩',stages:['em'],type:'private',desc:'Componentes escolhidos conforme a proposta da escola e do sistema de ensino.'}
];
const stageLabels={infantil:'Educação Infantil',ef1:'Fundamental I',ef2:'Fundamental II',em:'Ensino Médio'};
const typeLabels={base:'Base comum',private:'Complementar'};
const subjectCatalogEl=document.getElementById('subjectCatalog');
const subjectCountEl=document.getElementById('subjectCount');
function renderSubjects(){
  const q=(document.getElementById('studySearch')?.value||'').toLowerCase().trim();
  const stage=document.getElementById('stageFilter')?.value||'all';
  const network=document.getElementById('networkFilter')?.value||'all';
  const list=subjectCatalog.filter(s=>(stage==='all'||s.stages.includes(stage))&&(network==='all'||s.type===network)&&(!q||`${s.name} ${s.desc}`.toLowerCase().includes(q)));
  subjectCountEl.textContent=`${list.length} ${list.length===1?'matéria':'matérias'}`;
  subjectCatalogEl.innerHTML=list.map(s=>`<button class="subject-card-new ${s.type==='private'?'complementary':''}" data-subject="${s.id}"><span class="subject-icon-new">${s.icon}</span><span class="subject-main"><b>${s.name}</b><small>${s.desc}</small><em>${s.stages.map(x=>stageLabels[x]).join(' • ')} · ${typeLabels[s.type]}</em></span><strong>›</strong></button>`).join('')||'<div class="empty-subjects">Nenhuma matéria encontrada com esses filtros.</div>';
  subjectCatalogEl.querySelectorAll('[data-subject]').forEach(btn=>btn.onclick=()=>openSubject(btn.dataset.subject));
}
function openSubject(id){
  const s=subjectCatalog.find(x=>x.id===id); if(!s) return;
  modalContent.innerHTML=`<h2>${s.icon} ${s.name}</h2><p>${s.desc}</p><p><b>Etapas:</b> ${s.stages.map(x=>stageLabels[x]).join(', ')}</p><div class="subject-topics"><b>O que o Aprende+ poderá organizar aqui</b><span>Conteúdos e habilidades por ano</span><span>Explicações adaptadas ao aluno</span><span>Exercícios e quizzes</span><span>Resumos e mapas mentais</span><span>Plano de estudos e acompanhamento</span></div><button class="modal-action">Começar a estudar</button>`;
  modal.classList.add('open'); modal.setAttribute('aria-hidden','false');
}
['studySearch','stageFilter','networkFilter'].forEach(id=>document.getElementById(id)?.addEventListener('input',renderSubjects));
['stageFilter','networkFilter'].forEach(id=>document.getElementById(id)?.addEventListener('change',renderSubjects));
renderSubjects();
