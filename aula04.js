function adicionarFilme() {
    var filmeFav = document.getElementById('filme').value
    var elementoListaFilmes = document.getElementById('listaFilmes')
    elementoListaFilmes.innerHTML = elementoListaFilmes.innerHTML + '<img src=' + filmeFav + '>'
    document.getElementById('filme').value = ''

}