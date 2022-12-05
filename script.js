const imagemHero = document.querySelector('.foto-hero');
const mensagemUsuario = document.querySelector('.mensagem-usuario');
const nomeUsuario = document.querySelector('.nome-usuario');
const imagemUsuario = document.querySelector('.imagem-usuario');
const mensagemCliente = document.querySelector('textarea');

const comentariosUsuarios = [
  {
    nome: 'Caio Pereira',
    comentario: 'Atendimento profissional! Entendem do produto e entregam rápido! Muito bom!'
  },
  {
    nome: 'Roseli Santos',
    comentario: 'Ótimo atendimento, entrega no prazo, parabéns a equipe.'
  },
  {
    nome: 'Elizandra Martins',
    comentario: 'Excelente atendimento e material de qualidade 🤩.'
  },
  {
    nome: 'Silvana BQ',
    comentario: 'Ótimo atendimento... material de qualidade... entrega rápida e com preço justo... super recomendo.'
  }
];

nomeUsuario.textContent = `${comentariosUsuarios[0].nome}`;
mensagemUsuario.textContent = `${comentariosUsuarios[0].comentario}`;


let indiceHero = 1;

function trocarImagemHero() {
  imagemHero.setAttribute('src', `assets/${indiceHero}.jpg`)
  if (indiceHero === 2) {
    indiceHero = 0
  }
  indiceHero++
}

setInterval(trocarImagemHero, 4000)

let indiceComentario = 1

function movimentarImagemComentarios() {
  imagemUsuario.setAttribute('src', `./assets/${indiceComentario}.png`);
  console.log(indiceComentario)

  if (indiceComentario === 3) {
    indiceComentario = -1
  }

  indiceComentario++
}

function movimentarMensagemDepoimento() {
  nomeUsuario.textContent = `${comentariosUsuarios[indiceComentario].nome}`;
  mensagemUsuario.textContent = `${comentariosUsuarios[indiceComentario].comentario}`;
}


setInterval(movimentarImagemComentarios, 3000);
setInterval(movimentarMensagemDepoimento, 1);

