function começar() {
    let ini = document.getElementById ('dado1')
    let fim = document.getElementById ('dado2') 
    let pas = document.getElementById ('dado3')
    let res = document.getElementById ('res')
    
    if(ini.value.length == 0 || fim.value.length == 0 || pas.value.lenght == 0) {
        res.innerHTML = `Impossivel contar..`
    } else {
        res.innerHTML = `Contanto>>>> <br>`
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(pas.value)
        if (p <= 0) {
            window.alert('Passo Invalido-- Usando PASSO 1')
            p = 1
        }
     if (i < f) {
        for(let c = i; c <= f; c += p){
             res.innerHTML += `\u{1F917} ${c}`
        }
       
    } else {
        for ( let c = i; c >= f; c-= p){
        res.innerHTML += `U+1F917 ${c}`
            }
     }
        res.innerHTML += `\u{270c}`
    }
}