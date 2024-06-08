const heroi = { //estrutura de repetição
nome: "Thor", //variáveis
xp: 9999999
};

if(heroi.xp <= 1000) // <= (estrutura de verificação)
heroi.status = "Ferro"

if(heroi.xp >= 1001 && heroi.xp <= 2000)
    heroi.status = "Bronze"

if(heroi.xp >= 2001 && heroi.xp <= 5000)
    heroi.status = "Prata"

if(heroi.xp >= 6001 && heroi.xp <= 7000)
    heroi.status = "Ouro"

if(heroi.xp >= 7001 && heroi.xp <= 8000)
    heroi.status = "Platina Diamante"

if(heroi.xp >= 8001 && heroi.xp <= 9000)
    heroi.status = "Ascendente"

if(heroi.xp >= 9001 && heroi.xp <= 10000)
    heroi.status = "Imortal"

else if (heroi.xp >= 10001) //estrutura de decisão
    heroi.status = "Radiante"

console.log("O herói " + heroi.nome + " está no nível de: " + heroi.status);