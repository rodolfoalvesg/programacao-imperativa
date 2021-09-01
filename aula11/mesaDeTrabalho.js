let participanteA =[5, 8, 4, 9, 5]
let participanteB =[8, 7, 8, 6, 8]
let participanteC =[7, 5, 10, 8, 3]



function pontuacaoMedia(acumulador, valorCorrente){
    return acumulador + valorCorrente;
}

let mediaParticipanteA = participanteA.reduce(pontuacaoMedia) / 5
let mediaParticipanteB = participanteB.reduce(pontuacaoMedia) / 5
let mediaParticipanteC = participanteC.reduce(pontuacaoMedia) / 5

console.log("Participante A, Média: ", mediaParticipanteA, "Participante B, Média: ", mediaParticipanteB, "Participante C, Média: ", mediaParticipanteC)

function pontuacaoMaior(participante){
    return Math.max(...participante)
}
pontuacaoMaior(participanteC)

console.log("Participante A, Maior: ", pontuacaoMaior(participanteA), "Participante B, Maior: ", pontuacaoMaior(participanteB), "Participante C, Maior: ", pontuacaoMaior(participanteC))


function competicao(pA, pB, pC){
    
}