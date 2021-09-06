var jogador = 1
var rodadaSemJogar = 0

function orientacaoJogador(){
    switch (jogador) {
        case 0:
            jogador += 1
            break;
        case 1:
            document.getElementById('jogVez').src = 'img/Peao-Grow-Branco.png';
            jogador += 1
            break;
        case 2:
            document.getElementById('jogVez').src = 'img/Peao-Grow-Azul.png';
            jogador += 1
            break;
        case 3:
            document.getElementById('jogVez').src = 'img/Peao-Grow-Preto.png';
            jogador += 1
            break;
        case 4:
            document.getElementById('jogVez').src = 'img/Peao-Grow-Verde.png';
            jogador = 1
            break;
        
    };
};

function sorteOrientacao(){
    var sorte = document.getElementById('sorte_sorteada').innerText;
    if (sorte == 'Jogue o dado novamente!'){
        jogador -= 1
    }   
}