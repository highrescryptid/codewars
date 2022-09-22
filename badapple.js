function sc(apple){
    for (let i = 0; i<apple.length; i++){
      let innerApplelength = apple[i].length
      
        for (let j = 0; j<innerApplelength; j++){
         if (apple[i][j] === 'B'){
           return [i,j]
         } 
        }
    }
  }