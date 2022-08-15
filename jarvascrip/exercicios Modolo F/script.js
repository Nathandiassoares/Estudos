let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []

function isnumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }

}

function inlista(n , l) {
    if (l.indexOf(Number(n))!= -1){
         return true
    } else {
        return false
    }
    
} 

function adicionar(){
    if (isnumero(num.value) && !inlista(num.value, valores)) {
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        lista.appendChild(item)
        res.innerHTML = ``

    } else {
        window.alert ('Erro valor invalido ou já encontrado!')
    }
    num.value = ''
    num.focus()
}

function finalizar(){
    if (valores.length == 0 ) {
        window.alert('Adcionione valores antes de finalizar')
    } else {
        let tot = valores.length
        
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for(let pos in valores){
            soma += valores[pos]

            if (valores[pos] > maior)
                maior = valores [pos]
            if (valores[pos] < menor)
                menor = valores[pos]

        }
        media = soma / tot
        res.innerHTML = ``
        res.innerHTML += `<p>O total de elemetos é ${tot}.</p>`
        res.innerHTML += `<p>O maior valor informado é ${maior}.</p>`
        res.innerHTML += `<p> O menor valor informado é ${menor}.</p>`  
        res.innerHTML += `<p> A soma dos valores é ${soma}`
        res.innerHTML += `<p> A Média dos valores é ${media}`


    }
}