let array = new Array
function adicionar() {
    
    let  entrada = document.getElementById('number').value
    let saida = document.getElementById('select')
    saida.innerHTML = ''
    array.push(entrada)

    let quantNumeros = array.length

    if (entrada == '' || entrada < 0 || entrada > 100) {
        saida.innerHTML = '<option> Numero invalido </option>'
        array.pop()
    } else {
        for(i = 0; i < quantNumeros; i++) {
           let sai = saida.innerHTML += `<option> Numero: ${array[i]} </option>`
        }
    }
}

function resul() {
    const resultados = document.getElementById('resultados')
    resultados.innerHTML = ''
    // length
    resultados.innerHTML += `<p> Ao todo, temos ${array.length} números cadastrados.</p>`
    // max
    resultados.innerHTML += `<p> O maior valor digitado foi: ${Math.max(...array)} </p>`
    // min
    resultados.innerHTML += `<p>O menor valor digitado foi: ${Math.min(...array)}</p>`
    // soma
    let sum = array.reduce((a, b) => +a + +b);
    resultados.innerHTML += `<p>A soma dos valores é:  ${sum}`
    // media
    resultados.innerHTML += `<p> A media dos valores é: ${sum / array.length}</p>`
}
