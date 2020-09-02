var vetdados = []
var testefreq = []
var frequencia = []
function calcular(){
    let selecionar = document.getElementById("selecionar").value
    let nome = document.getElementById("nomevar").value
    let dados = document.getElementById("dados").value
    vetdados = dados.split(";")
    if (selecionar == "nominal"){
        for(i = 0;i < vetdados.length;i++){
            let idx = vetdados.indexOf(vetdados[i])
            while(idx != -1){
                testefreq.push(idx)
                idx = vetdados.indexOf(vetdados[i], idx + 1)
            }
            alert(testefreq)
            testefreq = [0]
        }
    }
}