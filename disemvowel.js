function disemvowel(str) {
    let vowels = ['a', 'A', 'e', 'E', 'i', 'I', 'o', 'O', 'u', 'U']
    let string = str.split('')
    let disemvoweled = string.filter(el => !vowels.includes(el))
    return disemvoweled.join('')
  }