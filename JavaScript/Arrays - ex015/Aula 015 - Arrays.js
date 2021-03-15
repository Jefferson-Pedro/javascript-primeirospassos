let num = [5,8,2,9,3]

num.push(1) //coloca elementos na ultima posição do array
num.sort() //sempre adicionar esse comando depois que for adicionado um elemento para garantir que os numeros ficarão em ordem.
console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
let pos = num.indexOf(8) // busca valores dentro do meu array, se não encontrada retorna valor -1
if(pos == -1){
  console.log("O valor não foi encontrado")
}else{
  console.log(`O valor 8 está na posição ${pos}`)
// a posição será 4 porque usou o sort() para ordenar
}