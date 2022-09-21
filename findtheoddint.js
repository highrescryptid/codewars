function findOdd(array) {
    let count = {}
    array.forEach(function(x) {count[x] = (count[x] || 0) + 1})
    
    let sortedArray = Object.entries(count)
    let sortedMap = new Map(sortedArray)
    
    for (let [key, value] of sortedMap){
      if (Number(value)%2 !== 0){
        return Number(key)
      }
    }
  }