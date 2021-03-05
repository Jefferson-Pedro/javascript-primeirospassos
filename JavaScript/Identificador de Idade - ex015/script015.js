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
        let img = document.createElement('img') // Metodo pra criar um novo elemento no codigo sem precisar inserir no HTML
        img.setAttribute('id', 'foto') //Para atribuir elemento na tag recem criada no html como acima.

            if(sexo[0].checked){ // sexo[0] significa que foi marcado a primeira opção no botão radio.
                genero = 'Homem'
                if (idade > 0 && idade < 12){
                    //CRIANÇA
                    img.setAttribute('src', 'bebe_menino.png')

                }else if (idade < 18){
                    //JOVEM
                    img.setAttribute('src', 'jovem_homem.png')
                
                }else if(idade < 60){
                    //ADULTO
                    img.setAttribute('src', 'homem_adulto.png')
                
                }else{
                    // IDOSO
                    img.setAttribute('src','idoso_homem.png')
                }

            }else{
                if(sexo[1].checked){
                    genero = 'Mulher'
                    if (idade > 0 && idade < 12){
                        //CRIANÇA
                        img.setAttribute('src', 'bebe_menina.png')
    
                    }else if (idade < 18){
                        //JOVEM
                        img.setAttribute('src', 'jovem_mulher.png')
                    
                    }else if(idade < 60){
                        //ADULTA
                        img.setAttribute('src', 'mulher_adulta.png')
                    
                    }else{
                        // IDOSA
                        img.setAttribute('src','idosa_mulher.png')
                    }
    
                }
            }
         //res.style.textAling = 'center' (para centralizar via js)
        msg.innerHTML = `Identificamos ${genero} de ${idade} anos.`
        msg.appendChild(img) //vai adicionar um elemento depois da msg.
    }
}


/*a função length também pode ser utilizada para validar o tamanho de uma sequencia de numeros. Exemplo abaixo:
var cpfExemplo ="123.456.789-12";

if (cpfExemplo.length == 14) {
         console.log("CPF com tamanho correto!");
} else {
         console.log("Verificar campo CPF");
}
-------------------------------------------------------
if(fsex[0].checked) = se o botão masculino( que é [0]) estiver marcado...


*/