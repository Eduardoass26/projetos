var descricao_Gastos =[];
var total = 0;
const salvar = document.getElementById("adicionar");

salvar.addEventListener('click',function inserir_Dados_Tabela(){

    var descricao_Gasto = document.getElementById("Descricao_gasto").value;
    var valor_Gasto = document.getElementById("Valor_gasto").value;

    
    descricao_Gastos.push({descricao__Gasto : descricao_Gasto, valor__Gasto : valor_Gasto});
    
    
    if(descricao_Gasto !== "" && valor_Gasto !== ""){
        
        
        var tabela = document.getElementById("corpo_Tabela");
        tabela.innerHTML = "";
        

    }
        else{
        var preencha_Campos = document.getElementById("alerta_Input_Vazio");
        preencha_Campos.innerHTML = "*Por Favor preencha todos os campos corretamente*";
    }

        for(var i = 0 ; i < descricao_Gastos.length ; i++){

            total += descricao_Gastos[i].valor__Gasto;
            tabela.innerHTML += `
            <tr>
                <td>${descricao_Gastos[i].descricao__Gasto}</td>
                <td>R$${descricao_Gastos[i].valor__Gasto}</td>
            </tr>
            
            `;
        
          
    }
    var total = document.getElementById("valor_total");
    total.innerHTML =`
    <td>Total </td>
    <td>R$ 0</td>
    `;
    
    document.getElementById("Descricao_gasto").value = "";
    document.getElementById("Valor_gasto").value ="";
    

});
