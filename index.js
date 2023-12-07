let players = [
    ["Bardo Pond", 252, 204],
    ["Tamara di Amstagi", 364, 272],
    ["Josias The Wanderer", 125, 120],
    ["Lidice Kill", 214, 139]
]

function resultMatches(ind) {
    let victories = players[ind][1]
    let defeats = players[ind][2]
    return resultTrueVictories(victories, defeats)
}
function resultTrueVictories(v, d) {
    let result = v - d
    return result
}
function resultLevel(wb) {
    let level = ""
    switch (wb > 0) {
        case (wb <= 10):
            level = "Ferro"
            break
        case (wb <= 20):
            level = "Bronze"
            break
        case (wb <= 50):
            level = "Prata"
            break
        case (wb <= 80):
            level = "Ouro"
            break
        case (wb <= 90):
            level = "Diamante"
            break
        case (wb <= 100):
            level = "Lendário"
            break
        case (wb >= 101):
            level = "Imortal"
            break
    }
    return level
}

console.log("=".repeat(26))
console.log("CLASSIFICAÇÃO DOS HERÓIS:")
console.log("=".repeat(26))

for (let i = 0; i < players.length; i++) {
    let name = players[i][0]
    let winningBalance = resultMatches(i)
    let level = resultLevel(winningBalance)
    console.log(`${name} tem o saldo de ${winningBalance} pontos. Está no nível ${level}.`)
}