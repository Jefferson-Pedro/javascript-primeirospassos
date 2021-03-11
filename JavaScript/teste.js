function checar(){
    let nasc = window.document.getElementById('nasc')
    let msg = window.document.getElementById('msg')
    let data = new Date()
    let AnoAtual = data.getFullYear()

   if(nasc.value.length == 0 || nasc.value < 1910 || nasc.value > AnoAtual){ 
        window.alert('[ERRO] Verique os dados preenchidos e tente novamente!')
    }else{
        let sexo = window.document.getElementsByName('rsex') // Liga a variavel ao botão radio
        let idade = AnoAtual - Number(nasc.value)
        let genero = ''
        let img = document.getElementById('foto') // Metodo pra criar um novo elemento no codigo sem precisar inserir no HTML
       //img.setAttribute('id', 'foto') //Para atribuir elemento na tag recem criada no html como acima.

            if(sexo[0].checked){ // sexo[0] significa que foi marcado a primeira opção no botão radio.
                genero = 'Homem'
                if (idade > 0 && idade < 12){
                    //CRIANÇA
                    img.src ="bebe_menino.png"
                }
            }
         //res.style.textAling = 'center' (para centralizar via js)
        msg.innerHTML = `Identificamos ${genero} de ${idade} anos.`
        img.style.
        //msg.appendChild(img) //vai adicionar um elemento depois da msg.
    }
}