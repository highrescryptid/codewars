function solution(string) {
    //check each letter in string against itself toUpperCase and save index if true
    let stringArr = string.split('');
     let indexesToSplit = []
      for (let i = 0; i<stringArr.length; i++){
       if (stringArr[i].toUpperCase() === stringArr[i]){
        indexesToSplit.push(i)
        }
      }
    
      //add index of array to index # to adjust for spaces being added
      let adjIndexes = indexesToSplit.map((el, ind) => el + ind)
      
      //add spaces to array of characters in position before the upper case
      for (let j = 0; j<adjIndexes.length; j++){
        stringArr.splice(adjIndexes[j], 0, ' ')
        }
    
      //return string of joined chars with spaces and profit
      return stringArr.join('')
    }