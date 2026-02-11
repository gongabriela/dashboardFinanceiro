/*
OBJETIVO:
Conectar tudo.

PASSO A PASSO:

1) Capturar inputs do formulário.
2) Escutar clique do botão.
3) Validar dados.
4) Criar objeto transação.
5) Atualizar estado.
6) Re-renderizar UI.
7) Limpar formulário.

IMPORTANTE:
Sempre que adicionar uma transação:
- Atualizar lista
- Atualizar cards

Pergunta:
O que deve acontecer quando a página recarrega?
*/

import { salvarDados, buscarDados } from "./modules/services/storage.js";
import { calcularRendaTotal, calcularDespesaTotal, calcularBalancoTotal } from "./modules/utils/calculations.js";
import { formatarValor } from "./modules/utils/formatters.js";
import { atualizarCartoes } from "./modules/dom/dom.js";

//buscar dados do localStorage
const dados = buscarDados();

//calcular o valor dos cards e formatr
const rendaTotal = formatarValor(calcularRendaTotal(dados));
const despesaTotal = formatarValor(calcularDespesaTotal(dados));
const balancoTotal = formatarValor(calcularBalancoTotal(dados));

//atualizar os cards
atualizarCartoes(balancoTotal, rendaTotal, despesaTotal);