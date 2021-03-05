function contar(){
    var msg = window.document.getElementById('msg') //objeto
    var inicio = window.document.getElementById('n1') //objeto
    var fim = window.document.getElementById('n2') //objeto
    var passo = window.document.getElementById('n3') //objeto

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length  == 0) {
        window.alert('[ERRO] Faltam dados a serem preenchidos!')
       // msg.innerHTML = `Impossivel contar!`
    }

}











/*
document.write(`Olá. <strong>${nome}</strong>, seu nome tem ${nome.length} letras<br/>`)


 let = var. Para declarar variaveis pode-se usar um ou outro.
 https://unicode.org/emoji/charts/full-emoji-list.html  - Para por emojis

else{
        msg.innerHTML = 'Contando: '
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

       
    }


  if(p <=0){
            window.alert('Passo invalido! Considerando PASSO 1')
            p = 1
        }
        
        } else {
            //contagem regressiva
            for(let c = i; c >= f; c-= p){
                msg.innerHTML += ` ${c} \u{1f449}`
            }
        }
        //msg.innerHTML += `\u{1f3c1}`

*/