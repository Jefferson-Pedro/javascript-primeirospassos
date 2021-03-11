let valores = [8,1,7,4,2,9]

valores.sort()
//console.log(valores)

for(pos = 0; pos < valores.length; pos++){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}

// outra forma mais simples de exibir um array

for(let pos in valores){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}


//valores.length - enquanto pos for menor que o tamanho total do meu array, usado quando não sei o tamanho do array;