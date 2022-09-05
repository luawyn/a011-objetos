// # Exercício 1

// Crie um array vazio chamado `sacolao`, e siga os passos abaixo:
const sacolao = []
// a) Crie três objetos que vão representar frutas do sacolão. Os objetos devem ter as seguintes propriedades:
// ```jsx
// nome: string;
// preco: number;
// disponibilidade: boolean;
// ```
const fruta1 = {
  nome: 'laranja',
  preco: 3.7,
  disponibilidade: true
}
const fruta2 = {
  nome: 'limão',
  preco: 6.2,
  disponibilidade: false
}
const fruta3 = {
  nome: 'acerola',
  preco: 9.8,
  disponibilidade: false
}

// b) Adicione os objetos ao array `sacolao` utilizando o método **`push()`**
sacolao.push(fruta1, fruta2, fruta3)

// c) Imprima a o array `sacolao`, e certifique-se de que agora ela seja um array **com três objetos**
console.log(sacolao)
