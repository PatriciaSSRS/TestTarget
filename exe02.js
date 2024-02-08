function Q2_pertenceFibonacci(numero){
    let v1 = 0;
    let v2 = 1;
    let v3 = v1 + v2;
    while( v3 < numero){
      v1 = v2;
      v2 = v3;
      v3 = v1+v2;
    }
    if (v3 === numero){
      return true;
    }
    return false;
  }
  
  console.log(Q2_pertenceFibonacci(13))