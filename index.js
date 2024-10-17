
let nomeHeroi = "Mario"
let numVitorias = 80
let numDerrotas = 15
let resultado = quantVitoriaEDerrotas(numVitorias, numDerrotas)
let nivelRank = experiencia (resultado)



console.log("O Herói de nome: " + nomeHeroi + ", tem o saldo de: " + resultado + " vitorias, e está no nível de: " + nivelRank);



function quantVitoriaEDerrotas (numV, numD) {
    let saldoRankeadas = numV-numD
    
    return saldoRankeadas
}

function experiencia (saldoRankeadas){

    if (saldoRankeadas < 10 )
        nivel = "Ferro"
    else if (saldoRankeadas > 10 && saldoRankeadas <= 20 )
        nivel = "Bronze"
    else if (saldoRankeadas >= 21 && saldoRankeadas <= 50 )
        nivel = "Prata"
    else if (saldoRankeadas >= 51 && saldoRankeadas <= 80 )
        nivel = "Ouro"
    else if (saldoRankeadas >= 81 && saldoRankeadas <= 90 )
        nivel = "Diamante"
    else if (saldoRankeadas >= 91 && saldoRankeadas <= 100 )
        nivel = "Lendario"
    else 
        nivel = "Radiante"

return nivel
}

