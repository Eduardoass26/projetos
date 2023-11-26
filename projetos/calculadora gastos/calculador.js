var descricao_Gastos = [];
var total = 0;
const salvar = document.getElementById("adicionar");

salvar.addEventListener('click', function inserir_Dados_Tabela() {
    var descricao_Gasto = document.getElementById("Descricao_gasto").value;
    var valor_Gasto = parseFloat(document.getElementById("Valor_gasto").value);

    if (descricao_Gasto !== "" && !isNaN(valor_Gasto)) {
        descricao_Gastos.push({ descricao__Gasto: descricao_Gasto, valor__Gasto: valor_Gasto });

        var tabela = document.getElementById("corpo_Tabela");

        // Limpar a tabela antes de reconstruir
        tabela.innerHTML = "";

        // Resetar o total
        total = 0;

        for (var i = 0; i < descricao_Gastos.length; i++) {
            total = total + descricao_Gastos[i].valor__Gasto;
            tabela.innerHTML += `
            <tr>
                <td>${descricao_Gastos[i].descricao__Gasto}</td>
                <td>R$${descricao_Gastos[i].valor__Gasto.toFixed(2)}</td>
            </tr>
            `;
        }

        var tabelatotal = document.getElementById("valor_total");
        tabelatotal.innerHTML = `
            <td>Total </td>
            <td>R$ ${total.toFixed(2)}</td>
        `;

        document.getElementById("Descricao_gasto").value = "";
        document.getElementById("Valor_gasto").value = "";
    } else {
        var preencha_Campos = document.getElementById("alerta_Input_Vazio");
        preencha_Campos.innerHTML = "*Por Favor preencha todos os campos corretamente*";
    }
});
