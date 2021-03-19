function calc(){
    let numero = document.getElementById('n1')
    let tab = document.getElementById('seltab')
   

    if(numero.value.length == 0){
        window.alert('[ERRO] Insira um numero para começarmos!')
    }else{
        let num = Number(numero.value)
        tab.innerHTML = ''
        for(let c = 0; c <= 10; c++ ){
            let item = document.createElement('option')
            item.text = `${num} x ${c} = ${c*num}` 
            tab.appendChild(item)
        }
    } 
}
