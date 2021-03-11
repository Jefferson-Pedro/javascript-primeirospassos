function calc(){
    let numero = document.getElementsById('n1')
    let select = document.getElementById('seltab')
    let res = document.getElementById('op')

    let num = Number(numero.value)
    for(let c = 1; c <= 10; c++){
        res.innerHTML = `${num} x ${c} = ${num*c}`
    }
}
