function calcularRank(vitoria, derrota) {
    let saldoVitorias = vitoria - derrota
    let rank;

    if (vitoria < 10) {
        rank = "Ferro";
    } else if (vitoria <= 20) {
        rank = "Bronze";
    } else if (vitoria <= 50) {
        rank = "Prata";
    } else if (vitoria <= 80) {
        rank = "Ouro";
    } else if (vitoria <= 90) {
        rank = "Diamante";
    } else if (vitoria <= 100) {
        rank = "Lendário";
    } else {
        rank = "Imortal";
    }

return {saldoVitorias, rank}
}
let vitoria = '1000'
let derrota = 5

let resultado = calcularRank(vitoria, derrota);
console.log(`O Herói tem saldo de ${resultado.saldoVitorias} e está no nível de ${resultado.rank}`);