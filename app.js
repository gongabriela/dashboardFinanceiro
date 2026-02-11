import { salvarDados, buscarDados } from "./modules/services/storage.js";
import { calcularRendaTotal, calcularDespesaTotal, calcularBalancoTotal } from "./modules/utils/calculations.js";
import { formatarValor } from "./modules/utils/formatters.js";
import { atualizarCartoes, renderizarListaTransacoes } from "./modules/dom/dom.js";

const dadosIniciais = buscarDados();
const inputDescricao = document.getElementById('descricao');
const inputValor = document.getElementById('quantidade');
const inputTipo = document.getElementById('tipo-transacao');
const btnAdicionar = document.querySelector('.adiciona-historia');
const listaTransacoes = document.querySelector('.lista-transacoes');

function criarDadoTransacao() {

    const descricaoDigitada = inputDescricao.value;
    const valorDigitado = inputValor.value;
    const tipoSelecionado = inputTipo.value;
    
    const novaTransacao = {
        id: Date.now(),
        descricao: descricaoDigitada,
        valor: parseFloat(valorDigitado),
        tipo: tipoSelecionado,
        data: new Date().toLocaleDateString()
    };
    return novaTransacao;
}

function atualizarDashboard(dados) {
    const rendaTotal = formatarValor(calcularRendaTotal(dados));
    const despesaTotal = formatarValor(calcularDespesaTotal(dados));
    const balancoTotal = formatarValor(calcularBalancoTotal(dados));
    atualizarCartoes(balancoTotal, rendaTotal, despesaTotal);
    renderizarListaTransacoes(dados);
}

function processarNovaTransacao () {
    const novaTransacao = criarDadoTransacao();
    const dadosAtuais = buscarDados();
    dadosAtuais.push(novaTransacao);
    salvarDados(dadosAtuais);

    inputDescricao.value = '';
    inputValor.value = '';

    atualizarDashboard(dadosAtuais);
}

function removerTransacao(event) {
    const transacaoClicada = event.target.closest('.btn-lixeira');
    if (!transacaoClicada) return;
    const idClicado = Number(transacaoClicada.dataset.id);
    const dados = buscarDados();

    // o filter deixa passar todo mundo que tiver o id DIFERENTE do que clicamos
    const dadosAtualizados = dados.filter(transacao => {
        return transacao.id !== idClicado;
    });

    salvarDados(dadosAtualizados);
    atualizarDashboard(dadosAtualizados);
}

atualizarDashboard(dadosIniciais);
btnAdicionar.addEventListener('click', processarNovaTransacao);
listaTransacoes.addEventListener('click', removerTransacao);
