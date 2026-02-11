import { salvarDados, buscarDados } from "./modules/services/storage.js";
import { calcularRendaTotal, calcularDespesaTotal, calcularBalancoTotal } from "./modules/utils/calculations.js";
import { formatarValor } from "./modules/utils/formatters.js";
import { atualizarCartoes, renderizarListaTransacoes } from "./modules/dom/dom.js";

//buscar dados do localStorage
const dados = buscarDados();

//calcular o valor dos cards e formatr
const rendaTotal = formatarValor(calcularRendaTotal(dados));
const despesaTotal = formatarValor(calcularDespesaTotal(dados));
const balancoTotal = formatarValor(calcularBalancoTotal(dados));

//atualizar os cards
atualizarCartoes(balancoTotal, rendaTotal, despesaTotal);

//renderizar lista de transações
renderizarListaTransacoes(dados);

/**
 * processar nova transacao
 */

const inputDescricao = document.getElementById('descricao');
const inputValor = document.getElementById('quantidade');
const inputTipo = document.getElementById('tipo-transacao');
const btnAdicionar = document.querySelector('.adiciona-historia');

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

    const dadosAtuais = buscarDados();
    dadosAtuais.push(novaTransacao);
    salvarDados(dadosAtuais);

    inputDescricao.value = '';
    inputValor.value = '';
    
    const rendaTotal = formatarValor(calcularRendaTotal(dadosAtuais));
    const despesaTotal = formatarValor(calcularDespesaTotal(dadosAtuais));
    const balancoTotal = formatarValor(calcularBalancoTotal(dadosAtuais));
    atualizarCartoes(balancoTotal, rendaTotal, despesaTotal);
    renderizarListaTransacoes(dadosAtuais);
}

btnAdicionar.addEventListener('click', criarDadoTransacao);

