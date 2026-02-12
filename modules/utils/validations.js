export function validarTransacao(descricao, valor) {
    //verif descricao
    if (descricao.trim() === '') {
        alert('A descrição não pode estar vazia.');
        return false;
    }
    if (valor === '' || valor <= 0) {
        alert('O valor deve ser maior que zero.');
        return false;
    }
    return true;
}
