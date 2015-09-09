function Bike(name, bikeType, frameColor, condition){
  this.name = name;
  this.bikeType = bikeType;
  this.WHEELS = 2;
  this.frameColor = frameColor;
  if (typeof condition === 'undefined'){ this.condition = 'ready to go!'; }
}

Bike.prototype.takeForARide = function(miles){
  if (miles > 50){
    this.condition = "needs a tune up";
  }
}

Bike.prototype.tuneUp = function(){
  this.condition = "ready to go!";
}
