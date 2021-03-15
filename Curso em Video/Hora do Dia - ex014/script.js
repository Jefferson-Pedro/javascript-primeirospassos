function carregar(){
    let data = new Date()
    let hora = data.getHours()
    var minutos = data.getMinutes()
    let msg = window.document.getElementById('msg')
    let img = window.document.getElementById('img')

    msg.innerHTML = `São ${hora} horas e ${minutos} minutos.`
    if (hora >= 0 && hora < 12){
        //MANHÃ
        img.src = 'manha.png'
        document.body.style.background = '#e2cd9f'
    }else if(hora >= 12 && hora < 18){
        //TARDE
        img.src = 'tarde.png'
        document.body.style.background = '#b9846f'
    }else{
        //NOITE
        img.src = 'noite.png'
        document.body.style.background = '#515154'
    }

}











/*var dataAtual = new Date();
var dia = dataAtual.getDate();
var mes = (dataAtual.getMonth() + 1);
var ano = dataAtual.getFullYear();
var horas = dataAtual.getHours();
var minutos = dataAtual.getMinutes();
console.log("Hoje é dia " + dia + "/" + mes + " de " + ano + ". Agora são " + horas + ":" + minutos + "h.");
// saída: Hoje é dia 15/7 de 2020. Agora são 14:59h.

*/