let faturamento = [300,1879,405,6435,2043,3242,323,456,340,987,405,1714,506,453,970,544,234,589,555]

function media(faturamento){
  let total = 0;
  for(let i = 0; i < faturamento.length; i++){
    total = total + faturamento[i];
  }
  return total/ faturamento.length;
}

console.log(media(faturamento));

function menorValor(faturamento){
    let menor = faturamento[0];
    for( let i = 1; i < faturamento.length; i++){
        if (menor > faturamento[i]){
            menor = faturamento[i];
        }
    }
    return menor;
}

console.log(menorValor(faturamento));

function maiorValor(faturamento){
    let maior = faturamento[0];
    for (let i = 1; i < faturamento.length; i++){
        if(maior < faturamento[i]){
            maior = faturamento[i];
        }
    }
    return maior;
}
console.log(maiorValor(faturamento));

function diasSuperiorMedia(faturamento){
    let dCont = 0;
    let med = media(faturamento);
    for(let i = 0; i < faturamento.length; i++){
        if(faturamento[i] > med){
            dCont++;
        }
    }
    return dCont;
}
console.log(diasSuperiorMedia(faturamento));
