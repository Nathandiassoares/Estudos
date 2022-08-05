let num = [2,9,3,4]
num.push(1)
num.sort ()

console.log(`${num}`)

console.log(`Quantos digitos contem? ${num.length}`)

let pos = num.indexOf(2)

if ( pos == -1) {
    console.log(`Valos não encontrado`)
} else {
    console.log(`${pos}`)
}