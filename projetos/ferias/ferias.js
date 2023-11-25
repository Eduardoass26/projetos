    const funcionarios = [
    
    { 
      nome: 'joao',
      dataAdmissao: new Date('2020-03-15'),
      feriaspagas: 80,
      ferias: false
    },
    {
      nome: 'Maria',
      dataAdmissao: new Date('2019-07-10'),
      feriaspagas: 90,
      ferias: false
    },
    {
      nome: 'Pedro',
      dataAdmissao: new Date('2021-06-22'),
      feriaspagas: 30,
      ferias: true
    },
   
   
  ];
  const funcionariosComFeriasVencidas = [];




  function calcularPeriodoProporcional(dataAdmissao) {
    const dataAtual = new Date();
    const mesesTrabalhados = (dataAtual - dataAdmissao) / (1000 * 60 * 60 * 24 * 30); // Meses de trabalho
    const mesesCompletos = Math.floor(mesesTrabalhados);

    // O funcionário tem direito a 30 dias de férias após 12 meses de trabalho.
    // Adicione 1/12 avos para cada mês completo trabalhado.
    const fracao = mesesCompletos / 12;
    const diasProporcionais = fracao * 30;

    return diasProporcionais;
  }

  const funcionariosTable = document.getElementById('funcionariosTable');

  const funcionarios_atualizado = [];

  funcionarios.forEach(funcionario => {
    const feriasProporcionais = calcularPeriodoProporcional(funcionario.dataAdmissao);
    const feriasVencidas = feriasProporcionais - funcionario.feriaspagas;

    const dadosFuncionario = {
        nome: funcionario.nome,
        dataAdmissao: funcionario.dataAdmissao.toLocaleDateString('pt-BR'),
        totalFeriasPagas: funcionario.feriaspagas,
        feriasVencidas: feriasVencidas,
        feriasProporcionais: feriasProporcionais,
    };

    funcionarios_atualizado.push(dadosFuncionario);

    const row = funcionariosTable.insertRow();
    row.insertCell(0).textContent = dadosFuncionario.nome;
    row.insertCell(1).textContent = dadosFuncionario.dataAdmissao;
    row.insertCell(2).textContent = dadosFuncionario.totalFeriasPagas;
    row.insertCell(3).textContent = dadosFuncionario.feriasVencidas;
    row.insertCell(4).textContent = dadosFuncionario.feriasProporcionais;

    // Adiciona a classe 'emFerias' se o funcionário está de férias
    if (funcionario.ferias) {
        row.classList.add("emferias");
    }

    if (feriasVencidas > 30) {
        funcionariosComFeriasVencidas.push(funcionario.nome);
    }
});

// Restante do seu código...

  
  if (funcionariosComFeriasVencidas.length > 0) {
    const mensagem = `Alerta: Os seguintes funcionários possuem mais de 30 dias de férias vencidas: ${funcionariosComFeriasVencidas.join(", ")}.`;
    document.getElementById("funcionariospendentes").innerHTML = mensagem;
  }
  
 
