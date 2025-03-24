alert("Vamos lá! Informe qual é o dia da semana");
let diaDaSemana = ["Sábado", "Domingo", "Sexta", "domingo", "Sabado", "sabado", "sábado"];



function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
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

exibirMensagemInicial("h2", "Qual será o dia da semana?");


let chute = prompt("Qual é o dia da semana?").toLowerCase(); // Convertendo o chute para minúsculo

// Verificando se o dia da semana contém o chute
let encontrado = diaDaSemana.some(dia => dia.toLowerCase().includes(chute));

if (encontrado) {
    exibirTextoNaTela("h2", "Sextou, Sabadou e Domingou!!");
} else {
    exibirTextoNaTela("h2", "Bora trabaia...");
}

