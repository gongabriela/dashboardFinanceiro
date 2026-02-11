export function atualizarCartoes(totalBalanco, totalRenda, totalDespesa) {
    const elementoBalanco = document.getElementById('valor-balanco');
    const elementoRenda = document.getElementById('valor-renda');
    const elementoDespesa = document.getElementById('valor-despesa');

    elementoBalanco.textContent = totalBalanco;
    elementoRenda.textContent = totalRenda;
    elementoDespesa.textContent = totalDespesa;
}