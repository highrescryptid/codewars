function descendingOrder(n){
    let num = n.toString().split('').sort((a,b) => b-a ).join('')
    
    return Number(num)
  
    }