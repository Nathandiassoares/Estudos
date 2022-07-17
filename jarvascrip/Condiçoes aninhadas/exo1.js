var ida = 16 
console.log(`Você tem ${ida} idade`)
if (ida < 16) {
    console.log('Então não vota!')
} else if (ida < 18 || ida > 67) {
    console.log('Voto opcional!')
} else {
    console.log('Então vota!')
}