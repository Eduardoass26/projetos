var imagemAtual = 1; // Inicialmente, a primeira imagem está destacada

function destacarImagem() {
  for (var i = 1; i <= 3; i++) {
    var imagem = document.getElementById("img" + i);
    if (i === imagemAtual) {
      imagem.style.opacity = 1;
    } else {
      imagem.style.opacity = 0.3; // Define a opacidade para as outras imagens
    }
  }
}

function avancar() {
  imagemAtual++;
  if (imagemAtual > 3) {
    imagemAtual = 1; // Volta para a primeira imagem se chegar à última
  }
  destacarImagem();
}

function retornar() {
  imagemAtual--;
  if (imagemAtual < 1) {
    imagemAtual = 3; // Vai para a última imagem se estiver na primeira
  }
  destacarImagem();
}

// Inicializa a imagem destacada
destacarImagem();









