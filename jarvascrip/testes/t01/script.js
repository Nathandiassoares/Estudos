let num1 = document.querySelector('input#valor1')
let num2 = document.querySelector('input#valor2')


let res = document.querySelector('div#res')

function calcular() {
    
    let n1 = Number(num1.value)
    let n2 = Number(num2.value)
    
    if(num1.value >= 0 && num2.value >= 0){
        res.innerHTML = `A soma de ${n1} + ${n2} = ${n1+n2}`
    } else {
        window.alert('Valor invalido incira um valor correto')
    }
}