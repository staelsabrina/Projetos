function pegaNumero(num) { //função que pega os numeros e operações e adiciona no documento.
    document.resultado.texto.value = document.resultado.texto.value + num; //pega o value atual no resultado e adiciona o numero ou operação do onclick.
}

function igual(){
    res = document.resultado.texto.value; //variavel vai receber os itens adicionados no resultado
    if(res){
       document.resultado.texto.value = eval(res);  //eval vai avaliar a expressão dentro de res e apresentar o resultado no documento.
    }
}

function apaga() {
    document.resultado.texto.value = ""; //coloca uma string vazia dentro do form resultado, para apagar tudo.
}

