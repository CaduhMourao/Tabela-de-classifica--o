var cadu = {
    nome: "Cadu",
    vitorias: 0,
    empates: 0,
    derrotas: 0,
    pontos: 0
};

var joyce = {
    nome: "Joyce",
    vitorias: 0,
    empates: 0,
    derrotas: 0,
    pontos: 0
};

var fabi = {
    nome: "Fabi",
    vitorias: 0,
    empates: 0,
    derrotas: 0,
    pontos: 0
};

var lucas = {
    nome: "Lucas",
    vitorias: 0,
    empates: 0,
    derrotas: 0,
    pontos: 0
};

function calculaPontos(jogador) {
    var pontos = jogador.vitorias * 3 + jogador.empates;
    return pontos;
}

cadu.pontos = calculaPontos(cadu);
joyce.pontos = calculaPontos(joyce);
fabi.pontos = calculaPontos(fabi);
lucas.pontos = calculaPontos(lucas);

var jogadores = [cadu, joyce, fabi, lucas];

function exibeJogadoresNaTela(jogadores) {
    var elemento = ""

    for (var i = 0; i < jogadores.length; i++) {
        elemento += "<tr><td>" + jogadores[i].nome + "</td>"
        elemento += "<td>" + jogadores[i].vitorias + "</td>"
        elemento += "<td>" + jogadores[i].empates + "</td>"
        elemento += "<td>" + jogadores[i].derrotas + "</td>"
        elemento += "<td>" + jogadores[i].pontos + "</td>"
        elemento += "<td><button onClick='adicionarVitoria(" + i + ")'>Vitória</button></td>"
        elemento += "<td><button onClick='adicionarEmpate(" + i + ")'>Empate</button></td>"
        elemento += "<td><button onClick='adicionarDerrota(" + i + ")'>Derrota</button></td>"
        elemento += "</tr>"
    }
    var tabelaJogadores = document.getElementById("tabelaJogadores")
    tabelaJogadores.innerHTML = elemento
}

exibeJogadoresNaTela(jogadores)

function adicionarVitoria(i) {
    var jogador = jogadores[i]
    jogador.vitorias++
    jogador.pontos = calculaPontos(jogador)
    exibeJogadoresNaTela(jogadores)
}

function adicionarEmpate(i) {
    var jogador = jogadores[i]
    jogador.empates++
    jogador.pontos = calculaPontos(jogador)
    exibeJogadoresNaTela(jogadores)
}

function adicionarDerrota(i) {
    var jogador = jogadores[i]
    jogador.derrotas++
    exibeJogadoresNaTela(jogadores)
}