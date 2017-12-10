function Seat(x, y){//constructs a new seat
  this.isOccupied = false; //is the seat occupied or not
  this.occupiedColor = color(150, 0, 0);
  this.x = x; //coordinates of the seat
  this.y = y;



  this.setOccupied = function(){ //used to set seat to occupied
    this.isOccupied = true;
  }

  this.setVacant = function(){ //used to set seat to empty
    this.isOccupied = false;
  }

  this.displaySeat = function(){ //draws the seats
    stroke(0);
    strokeWeight(2);
    fill(255)
    if(this.isOccupied == true){
      fill(this.occupiedColor);
    }
    ellipse(this.x, this.y, 20, 20);
  }
}
