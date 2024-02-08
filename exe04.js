function percentualFaturamento(){
    let sp = 67836.43;
    let rj = 36678.66;
    let mg = 29229.88;
    let es = 27165.48;
    let outros = 19849.53;
    let total = sp+rj+mg+es+outros;
    console.log("Total Geral=" + total);
    console.log("SP ="+percentual(sp,total));
    console.log("RJ ="+percentual(rj,total));
    console.log("MG ="+percentual(mg,total));
    console.log("ES ="+percentual(es,total));
    console.log("Outros ="+percentual(outros,total));
}
function percentual(estado,total){
    return estado/total*100;
}
percentualFaturamento();