var number = function(busStops){
    let totalPeople = 0
      busStops.forEach(stop => {totalPeople += stop[0] - stop[1]})
    
      return totalPeople
  }