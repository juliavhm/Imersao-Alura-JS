//var numeroSecreto = parseInt(Math.random() * 1001)

var numeroSecreto = prompt('Escolha o número secreto entre 1 e 1000!')
while (numeroSecreto != num) {
    var num = prompt('Digite um número entre 0 e 1000')
    if (numeroSecreto == num) {
        alert('Você acertou o número secreto!')

    } else if (numeroSecreto > num) {
        alert('Errou... o número secreto é maior.')
    } else if (num > numeroSecreto) {
        alert('Errou... o número secreto é menor')
    }

}