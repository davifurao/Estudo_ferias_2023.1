const fs = require('fs');

const dataAtual = new Date();
const dia = dataAtual.getDate();
const mes = dataAtual.getMonth() + 1;
const ano = dataAtual.getFullYear();

const diaSemana = dataAtual.getDay();

const diasSemana = [
  'Domingo',
  'Segunda-feira',
  'Terça-feira',
  'Quarta-feira',
  'Quinta-feira',
  'Sexta-feira',
  'Sábado'
];

const atividades = [
  { dia: 'Segunda-feira', estudosConcurso: 2, leituraTI: 1, desenvolvimentoBlog: 2, melhoriasMQTT: 1 },
  { dia: 'Terça-feira', estudosConcurso: 2, leituraTI: 1, desenvolvimentoBlog: 2, melhoriasMQTT: 1 },
  { dia: 'Quarta-feira', estudosConcurso: 2, leituraTI: 1, desenvolvimentoBlog: 2, melhoriasMQTT: 1 },
  { dia: 'Quinta-feira', estudosConcurso: 2, leituraTI: 1, desenvolvimentoBlog: 2, melhoriasMQTT: 1 },
  { dia: 'Sexta-feira', estudosConcurso: 2, leituraTI: 1, desenvolvimentoBlog: 2, melhoriasMQTT: 1 },
  { dia: 'Sábado', estudosConcurso: 0, leituraTI: 0, desenvolvimentoBlog: 0, melhoriasMQTT: 0 },
  { dia: 'Domingo', estudosConcurso: 0, leituraTI: 0, desenvolvimentoBlog: 0, melhoriasMQTT: 0 }
];

const atividadeAtual = atividades.find(atividade => atividade.dia === diasSemana[diaSemana]);

const cronograma = `
Cronograma - ${diasSemana[diaSemana]} (${dia}/${mes}/${ano})

- Estudos para Concurso: ${atividadeAtual.estudosConcurso} horas
- Leitura de TI: ${atividadeAtual.leituraTI} hora
- Desenvolvimento do Blog: ${atividadeAtual.desenvolvimentoBlog} horas
- Melhorias na Biblioteca MQTT: ${atividadeAtual.melhoriasMQTT} hora
`;

const nomeArquivoCronograma = `cronograma_${dia}_${mes}_${ano}.txt`;
fs.writeFileSync(nomeArquivoCronograma, cronograma);

function adicionarAvanco(avanco) {
  const nomePastaAvancos = 'avancos';
  const nomeArquivoAvancos = `${nomePastaAvancos}/avancos_${dia}_${mes}_${ano}.txt`;
  const avancoFormatado = `[${dia}/${mes}/${ano}] ${avanco}`;

  if (!fs.existsSync(nomePastaAvancos)) {
    fs.mkdirSync(nomePastaAvancos);
  }

  fs.appendFileSync(nomeArquivoAvancos, avancoFormatado + '\n');
}

const avanco1 = 'Avanço 1: Concluído a leitura do livro X.';
const avanco2 = 'Avanço 2: Implementado recurso Y no blog.';
const avanco3 = 'Avanço 3: Corrigido bug na Biblioteca MQTT.';
const avanco4 = 'Avanco 4: Foi estudado os assuntos X e Y no momento de estudar para concurso';

adicionarAvanco(avanco1);
adicionarAvanco(avanco2);
adicionarAvanco(avanco3);
adicionarAvanco(avanco4);

console.log('Cronograma gerado e avanços adicionados com sucesso!');
