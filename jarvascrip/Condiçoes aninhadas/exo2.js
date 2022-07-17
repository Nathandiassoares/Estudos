var data = new Date()
var hr = data.getHours()
console.log (`Agora são ${hr} Horas`)
if(hr < 12){
    console.log('Bom dia!')
} else if (hr <= 18) {
    console.log('Boa tarde!')
} else {
    console.log('Boa noite!')
}