function carregar() {
    
    var img = document.getElementById ('img')
    var msg = document.getElementById ('msg')
    
    var data = new Date()
    var hora = data.getHours()
    
    msg.innerHTML = `Agora são ${hora} horas.`
    
    if (hora >= 0 && hora <12)  {
        img.src='manha.png'
        document.body.style.background = '#E2A076'
    } else if (hora >= 12 && hora <=18) {
        img.src='tarde.png'
        document.body.style.background = '#FEBF92'
    } else { 
        img.src = 'noite.png'
        document.body.style.background = '#07171F'
    }
    
    
}