function Owner(name){
  this.name = name;
  this.bikes = [];
}

Owner.prototype.buildBike = function(name, bikeType, frameColor){
  this.bikes.push(new Bike(name, bikeType, frameColor));
}

Owner.prototype.rideBike = function(bikeName, miles){
  this.bikes.forEach(function(bike) {
    bike.name === bikeName ? bike.takeForARide(miles) : 'undefined';
  });
}
