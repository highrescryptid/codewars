function sumDigPow(a, b) {
    const numArr = []
    for (let i = a; i <= b; i++){
      numArr.push(i)
    }
    
  function powerDigs(num){
      let number = num
                  .toString()
                  .split('')
                  .map((el, ind) => Math.pow(el, (ind+1)))
                  .reduce((a, c) => a + c)
  
      return number
  }
  
    return numArr.filter((el) => el === powerDigs(el))
  }