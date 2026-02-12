const erroDescricao = document.querySelector('.erro-descricao');
const erroQuantidade = document.querySelector('.erro-quantidade');

export function validarTransacao(descricao, valor) {
    //verif descricao
    if (descricao.trim() === '') {
        erroDescricao.textContent = 'A descrição não pode estar vazia.';
        return false;
    }
    erroDescricao.textContent = '';
    if (valor === '') {
        erroQuantidade.textContent = 'O valor não pode estar vazio.';
        return false;
    }
    else if (valor <= 0) {
        erroQuantidade.textContent = 'O valor deve ser maior que zero.';
        return false;
    }

    erroQuantidade.textContent = '';
    return true;
}
