function calcular() {
    let num = document.getElementById('txtn')
    let ca = document.getElementById('caixa')
    if (num.value.length == 0){
        window.alert('--Numero invalido, digite um numero !--')
    } else {
        let n = Number(num.value)
        let c = 1
        ca.innerHTML = ''

        while(c <= 20) {
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`
            ca.appendChild(item)
            c++
        }
    } 
}