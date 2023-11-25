// Arrays para armazenar as descrições e valores de gastos
let descricoes = [];
let valores = [];
const data=document.getElementById("mes_atual").value;



// Função para adicionar o gasto aos arrays e atualizar a tabela
function adicionarGasto() {
  // Obter os valores dos inputs
  const descricao = document.getElementById("descricao_gasto").value;
  const valor = document.getElementById("valor_gasto").value;

  // Verificar se ambos os campos foram preenchidos
  if (descricao && valor) {
    // Adicionar os dados aos arrays
    descricoes.push(descricao);
    valores.push(parseFloat(valor));

    // Limpar os inputs após salvar os dados
    document.getElementById("descricao_gasto").value = "";
    document.getElementById("valor_gasto").value = "";

    // Atualizar a tabela
    atualizarTabela();
    atualizarValorMes();
    calcularSomaGastos()
  }
}
//<h4 id="mes_ref"></h4>

function atualizarValorMes() {
  // Obter o valor do input
  const valorMes = document.getElementById("mes_atual").value;
  // Obter o elemento h4 pelo ID
  const elementoH4 = document.getElementById("mes_ref");
  // Definir o conteúdo do elemento h4 como o valor do input
  elementoH4.innerHTML = valorMes;
  document.getElementById("mes_atual").style.display = "none";
  document.getElementById("mes_ref").style.display = "inline";
}
// Função para atualizar a tabela HTML
function atualizarTabela() {
  // Obter a div da tabela
  const divTabela = document.getElementById("tabela");

  // Criar a tabela HTML
  let tabelaHTML = "<table>";

  // Iterar pelos arrays de descrições e valores e criar as linhas da tabela
  for (let i = 0; i < descricoes.length; i++) {
    tabelaHTML += "<tr><td>" + descricoes[i] + "</td><td>" + valores[i].toFixed(2) + "</td></tr>";
  }

  // Fechar a tabela HTML
  tabelaHTML += "</table>";

  // Inserir a tabela na div
  divTabela.innerHTML = tabelaHTML;

  
}
function calcularSomaGastos() {
  let somaTotal = 0;

  // Iterar pelo array de valores e somar os gastos
  for (let i = 0; i < valores.length; i++) {
    somaTotal += valores[i];
  }

  // Inserir o valor calculado na div "soma"
  const divSoma = document.getElementById("soma");
  divSoma.innerHTML = "Soma dos gastos: R$ " + somaTotal.toFixed(2);
 
}

function salvar(){
  const salvartabela = document.getElementById("tabela").innerHTML;
  const valor_total_gastos = document.getElementById("soma").innerHTML;
  document.getElementById("corpo").innerHTML = "";
  document.getElementById("tabela_salvar").innerHTML = salvartabela;
  document.getElementById("somatotal").innerHTML = valor_total_gastos;
  window.print();
  
}


// Chamada inicial para exibir a tabela vazia ao carregar a página
atualizarTabela();
calcularSomaGastos();