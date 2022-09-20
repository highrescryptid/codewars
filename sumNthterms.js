function SeriesSum(n){
    let finalNum = 0
    for (i = 1; i<=n; i++){
       finalNum += (1/(1+(i-1)*3))
      }
    return finalNum.toFixed(2)
  }