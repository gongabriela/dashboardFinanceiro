import { salvarDados, buscarDados } from "./modules/services/storage.js";
import { calcularRendaTotal, calcularDespesaTotal, calcularBalancoTotal } from "./modules/utils/calculations.js";
import { formatarValor } from "./modules/utils/formatters.js";
import { atualizarCartoes, renderizarListaTransacoes } from "./modules/dom/dom.js";

//dados de teste
const dadosTeste = [
    { id: 1, descricao: "Salário Mensal", valor: 4500, tipo: "receita", data: "11/02/2026" },
    { id: 2, descricao: "Supermercado", valor: 350.50, tipo: "despesa", data: "10/02/2026" },
    { id: 3, descricao: "Internet e TV", valor: 95.00, tipo: "despesa", data: "09/02/2026" },
    { id: 4, descricao: "Trabalho Freelance", valor: 800, tipo: "receita", data: "08/02/2026" }
];
salvarDados(dadosTeste);

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