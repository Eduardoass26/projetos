var imagens = document.getElementsByTagName("img");
var maximagens = document.getElementsByTagName("img").length;
var indice = 0;

   


function destacar_Imagem(){
  
    imagens[indice].classList.add("ativa");
}
function avancar(){
   

    if(indice >= maximagens -1){

        for(x = 0;x< maximagens ; x++){
            imagens[x].classList.remove("ativa");
        }
        indice = 0;
        imagens[indice].classList.add("ativa")

    }
    else{

        for(x = 0;x< maximagens ; x++){
            imagens[x].classList.remove("ativa");
        }
        indice ++;
        imagens[indice].classList.add("ativa");

    }
    
}

function retroceder() {
    if (indice <= 0) {
        for (var x = 0; x < maximagens; x++) {
            imagens[x].classList.remove("ativa");
        }
        indice = maximagens - 1;
        imagens[indice].classList.add("ativa");
    } else {
        for (var x = 0; x < maximagens; x++) {
            imagens[x].classList.remove("ativa");
        }
        indice--;
        imagens[indice].classList.add("ativa");
    }
}









destacar_Imagem();  
    

 