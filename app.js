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

let chute = prompt("Qual é o dia da semana?").toLowerCase(); // Convertendo o chute para minúsculo

// Verificando se o dia da semana contém o chute
let encontrado = diasDaSemana.some(dia => dia.toLowerCase().includes(chute));

if (encontrado) {
    exibirTextoNaTela("h2", "Bora trabaiar!");
} else {
    exibirTextoNaTela("h2", "Bora relaxar e tomar um suco de Laranja! ainn suquinho de laranja gostoso.");
}
