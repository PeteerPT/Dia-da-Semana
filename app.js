alert("Vamos lá! Informe qual é o dia da semana");

let diasDaSemana = ["segunda", "terca", "quarta", "quinta", "sexta"];
let fimDeSemana = ["sabado", "domingo"];


function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    if (campo) { 
        campo.innerHTML = texto;
    }
    if ('speechSynthesis' in window) {
        let utterance = new SpeechSynthesisUtterance(texto);
        utterance.lang = 'pt-BR'; 
        utterance.rate = 2.0; 
        window.speechSynthesis.speak(utterance); 
    } else {
        console.log("Web Speech API não suportada neste navegador.");
    }
}

function exibirMensagemInicial() {
    exibirTextoNaTela("h2", "Qual será o dia da semana?");
}

exibirMensagemInicial();

let chute = prompt("Qual é o dia da semana?");

let chuteNormalizado = chute.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");

console.log("Chute normalizado:", chuteNormalizado);

let regexFimDeSemana = /sabado|domingo/i;
let regexDiaDeSemana = /segunda|terca|quarta|quinta|sexta/i;

if (regexFimDeSemana.test(chuteNormalizado)) {
    exibirTextoNaTela("h2", "Bora relaxar e tomar um suco de Laranja");
} 
else if (regexDiaDeSemana.test(chuteNormalizado)) {
    exibirTextoNaTela("h2", "Bora trabalhar...");
} 
else {
    exibirTextoNaTela("h2", "Dia inválido, tente novamente.");
}
