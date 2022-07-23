function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('ERRO')
    } else {
       var fsex = document.getElementsByName ('radsex')
       var idade = ano - Number(fano.value)
       var genero = ''
       var img = document.createElement('img')
       img.setAttribute('id', 'foto') 

       if (fsex[0].checked) {
        genero = 'homen'
        
        if (idade >= 0 && idade < 10 ){
            //criança 
            img.setAttribute('src', 'homem-cr.png')
        } else if (idade < 21) {
            //jovem
            img.setAttribute('src', 'homem-jv.png')
        } else if ( idade < 50) {
            //adulto
            img.setAttribute('src', 'homem-ad.png')
        } else {
            //idoso
            img.setAttribute('src', 'homem-id.png')
        }
        
       
    
    
    } else  if (fsex[1].checked){
        genero = 'mulher'
        
        if (idade >= 0 && idade < 10 ){
            //criança 
            img.setAttribute('src', 'mulher-cr.png')
        } else if (idade < 21) {
            //jovem
            img.setAttribute('src', 'mulher-jv.png')
        } else if ( idade < 50) {
            //adulto
            img.setAttribute('src', 'mulher-ad.png')
        } else {
            //idoso
            img.setAttribute('src', 'mulher-id.png')
        }
    
    
    
    }
       res.style.textAlign = 'center'
       res.innerHTML = `Detectamos  ${genero} com ${idade} anos`
       res.appendChild(img) 

       }



    }