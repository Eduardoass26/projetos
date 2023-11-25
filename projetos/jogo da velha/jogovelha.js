const campo = document.querySelectorAll('.campo');
const jogadorSpan = document.getElementById('jogador');

let jogadorAtual = 'X';
let jogoAtivo = true;

function handleClick(event) {
  const campoClicado = event.target;

  if (!jogoAtivo || campoClicado.textContent !== '') return;

  campoClicado.textContent = jogadorAtual;
  campoClicado.classList.add(jogadorAtual);

  if (verificarVitoria()) {
    jogadorSpan.textContent = `Jogador ${jogadorAtual} venceu!`;
    jogoAtivo = false;
    return;
  }

  if (verificarEmpate()) {
    jogadorSpan.textContent = 'Empate!';
    jogoAtivo = false;
    return;
  }

  jogadorAtual = jogadorAtual === 'X' ? 'O' : 'X';
  jogadorSpan.textContent = `Jogador ${jogadorAtual}`;
}

campo.forEach((c) => c.addEventListener('click', handleClick));

function verificarVitoria() {
  const combinacoesVitoria = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  return combinacoesVitoria.some((comb) => {
    const [a, b, c] = comb;
    return campo[a].textContent && campo[a].textContent === campo[b].textContent && campo[a].textContent === campo[c].textContent;
  });
}

function verificarEmpate() {
  return [...campo].every((c) => c.textContent !== '');
}

function reiniciarJogo() {
  campo.forEach((c) => {
    c.textContent = '';
    c.classList.remove('X', 'O');
  });

  jogadorAtual = 'X';
  jogadorSpan.textContent = `Jogador ${jogadorAtual}`;
  jogoAtivo = true;
}

document.getElementById('reiniciar').addEventListener('click', reiniciarJogo);

jogadorSpan.textContent = `Jogador ${jogadorAtual}`;









