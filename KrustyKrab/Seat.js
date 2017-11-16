function Seat(x, y){//constructs a new seat
  this.isOccuppied = false; //is the seat occupied or not
  this.occupiedColor = color(250, 100, 100);
  this.x = x; //coordinates of the seat
  this.y = y;



  this.setOccupied = function(){ //used to set seat to occupied
    this.isOccuppied = true;
  }

  this.setVacant = function(){ //used to set seat to empty
    this.isOccupied = false;
  }

  this.displaySeat = function(){ //draws the seats
    stroke(0);
    strokeWeight(2);
    if(this.isOccupied == true){
      fill(this.occupiedColor);
    }
    ellipse(this.x, this.y, 20, 20);
  }
}
