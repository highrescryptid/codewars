function fakeBin(x){
    let newString = "";
    for (i = 0; i < x.length; i++) {
      if (Number(x[i]) < 5) {
        newString += "0";
      } else {
        newString += "1";
      }
    }
    return newString;
  }