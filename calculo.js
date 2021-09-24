// no arquivo calculo é preciso transforma-lo em um modulo

function soma(n1, n2) {
    return n1 + n2
}

//para exportar mais de uma operação
function multiplicar(n1, n2) {
    return n1 * n2
}
/*
para exportar uma operação
module.exports = soma
*/

//para exportar mais de uma operação cria-se um objeto de modulos
module.exports = {
    soma,
    multiplicar
}