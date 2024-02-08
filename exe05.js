function inverte(texto){
    let invertida = "";
    for (let i = 0; i < texto.length; i++){
        invertida = texto.substring(i,i+1)+invertida; 
    }
    return invertida;
}
console.log(inverte("palavra"));