//Crie um array vazio chamado `sacolao`, e siga os passos abaixo:
let sacolao = []

//Crie três objetos que vão representar frutas do sacolão. Os objetos devem ter as seguintes propriedades
let fruta1 = {nome: "Maçã", preco: 4, disponibilidade: true}
let fruta2 = {nome: "Banana", preco: 5, disponibilidade: true}
let fruta3 = {nome: "Pera", preco: 7, disponibilidade: true}

//Imprima a o array `sacolao`, e certifique-se de que agora ela seja um array **com três objetos**
//console.log(sacolao[{}, {}, {}])

//Adicione os objetos ao array `sacolao` utilizando o método **`push()`**
sacolao.push(fruta1, fruta2, fruta3)
console.log(sacolao)