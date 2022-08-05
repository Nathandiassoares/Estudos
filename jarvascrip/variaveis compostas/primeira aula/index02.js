let valor = [4,8,6,3,7,]
/*
for (pos=0;pos<valor.length;pos++) {
    console.log(`A posição ${pos} tem o valor ${valor[pos]}`) 
    
}
*/
for (let pos in valor){
    console.log(`A posição ${pos} Tem o valor ${valor[pos]}`)
}