//Observe o objeto abaixo e, utilizando o **espalhamento** resolva os exercícios a seguir:
const pokemon1 = {
	nome: "Bulbasaur",
	tipo: "Grama",
	nivel: 5
}

//a) Crie uma cópia do objeto, acima, mantendo a estrutura, mas trocando **`nome`** por “Squirtle” e **`tipo`** por “Água”
let pokemon2 = {...pokemon1,
    nome: "Squirtle",
    tipo: "Aguá"
}

//b) No objeto original, adicione mais uma propriedade, chamada `ataques`. Esta propriedade deve guardar um **array** de objetos com a estrutura abaixo. Inicie a propriedade como um array vazio, e crie o objeto abaixo utilizando `**push()**`
pokemon1.ataque = []
pokemon1.ataque.push({nome: "Ivestida", dano: 40, tipo: "Normal", precisao: 100})

//Na cópia do objeto original, adicione a propriedade **`ataques`** a partir do **espalhamento** da propriedade criada para o objeto original;
pokemon2.ataque = [...pokemon1.ataque]

//d) para o objeto original, adicione o ataque **“Folha Navalha”,** com **45 de dano**, **100 de precisão**, e de tipo **“Grama”**;
pokemon1.ataque.push({nome: "folha de navalha", dano:45, tipo: "grama", precisao:100})

//e) para a cópia, crie o ataque **“Jato de Água”**, com **40 de dano**, **100 de precisão**, e do tipo **“Água”**;
pokemon2.ataque.push({nome: "jato de agua", dano: 40, tipo: "agua", precisao: 100})

//f) Imprima os dois objetos no console.
console.log(" ")
console.log("Pokemon1: ", pokemon1)
console.log("Pokemon2: ", pokemon2)