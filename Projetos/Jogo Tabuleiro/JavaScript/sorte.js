function sorteioSorte(){
    var sortes = [
        "Volte uma posição!",
        "Avance duas posições!",
        "Jogue o dado novamente!",
        "Volte duas posições!",
        "Avance três posições! Que sorte!",
        "Volte três posições!",
        "Volte para a posição onde estava"
    ];
    var sorteio = Math.floor(Math.random() * sortes.length);
    var fraseSorteada = sortes[sorteio];
    document.getElementById('sorte_sorteada').innerHTML = fraseSorteada;
};