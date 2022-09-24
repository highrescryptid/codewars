function squareSum(numbers){
    let sqNums = numbers.map(x => x**2)
    return sqNums.reduce((a, c) => a + c, 0)
  }