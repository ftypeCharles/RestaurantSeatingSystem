//takes # of seats at table first
//x and y positions in restaraunt second
function Table(totalSeats, x, y, direction){//constructs a new table
  this.totalSeats = totalSeats;
  this.x = x - 20; //x coordinate adjusted
  this.y = y - 20; //y coordinate adjusted
  this.direction = direction; //direction the table is facing, can also be "bar"
  this.tableColor = color(255);
  this.isOccupied = false; //whether or not the table is occupied
  this.seatArray = []; //array of seats in the table

  this.tableHeight = 0; //just instantiates these to be manipulated later
  this.tableWidth = 0;

  if(this.totalSeats == 4){//the placement of the tables
    this.tableHeight = 40;
    this.tableWidth = 40;
  }else if(this.totalSeats == 6){
    this.tableHeight = 80;
    this.tableWidth = 40;
    if(this.direction == "up"){
      this.y = this.y - 20;
    }else{
      this.x = this.x - 20;
    }
  }else if(this.direction == "bar"){
    this.tableHeight = 220;
    this.tableWidth = 40;
  }else{
    this.tableHeight = 120;
    this.tableWidth = 40;
    if(this.direction == "up"){
      this.y = this.y - 40;
    }else{
      this.x = this.x - 40;
    }
  }

  if(this.direction == "side"){ //if the table type is "side", flips the table on its side
    let h = this.tableHeight;
    let z = this.tableWidth;
    this.tableHeight = z;
    this.tableWidth = h;
  }

  if(this.direction == "bar"){ //figure out or sign so you can condense this with previous if statement
    let h = this.tableHeight;
    let z = this.tableWidth;
    this.tableHeight = z;
    this.tableWidth = h;
  }

  if(this.totalSeats == 4){
    this.seatArray[0] = new Seat(this.x - 20, this.y + 20); //left side
    this.seatArray[1] = new Seat(this.x + 60, this.y + 20); //right side
    this.seatArray[2] = new Seat(this.x + 20, this.y - 20); //top
    this.seatArray[3] = new Seat(this.x + 20, this.y + 60); //bottom
  }else if(this.totalSeats == 6 && this.direction == "side"){
    this.seatArray[0] = new Seat(this.x - 20, this.y + 20); //left side
    this.seatArray[1] = new Seat(this.x + 100, this.y + 20); //right side
    this.seatArray[2] = new Seat(this.x + 20, this.y -20); //top 1
    this.seatArray[3] = new Seat(this.x + 60, this.y - 20); //top 2
    this.seatArray[4] = new Seat(this.x + 20, this.y + 60); //bottom 1
    this.seatArray[5] = new Seat(this.x + 60, this.y + 60); //bottom 2
  }else if(this.totalSeats == 8 && this.direction == "side"){
    this.seatArray[0] = new Seat(this.x - 20, this.y + 20); //left side
    this.seatArray[1] = new Seat(this.x + 140, this.y + 20); //right side
    this.seatArray[2] = new Seat(this.x + 20, this.y - 20); //top 1
    this.seatArray[3] = new Seat(this.x + 60, this.y - 20); //top 2
    this.seatArray[4] = new Seat(this.x + 100, this.y - 20); //top 3
    this.seatArray[5] = new Seat(this.x + 20, this.y + 60); //bottom 1
    this.seatArray[6] = new Seat(this.x + 60, this.y + 60); //bottom 2
    this.seatArray[7] = new Seat(this.x + 100, this.y + 60); //bottom 3
  }else if(this.totalSeats == 6 && this.direction == "up"){
    this.seatArray[0] = new Seat(this.x + 20, this.y - 20); //top side
    this.seatArray[1] = new Seat(this.x + 20, this.y - 100); //bottom side
    this.seatArray[2] = new Seat(this.x - 20, this.y + 20); //left 1
    this.seatArray[3] = new Seat(this.x - 20, this.y + 60); //left 2
    this.seatArray[4] = new Seat(this.x + 60, this.y + 20); //right 1
    this.seatArray[5] = new Seat(this.x + 60, this.y + 60); //right 2
  }else if(this.totalSeats == 8 && this.direction == "up"){
    this.seatArray[0] = new Seat(this.x + 20, this.y - 20); //top side
    this.seatArray[1] = new Seat(this.x + 20, this.y + 140); //bottom side
    this.seatArray[2] = new Seat(this.x - 20, this.y + 20); //left 1
    this.seatArray[3] = new Seat(this.x - 20, this.y + 60); //left 2
    this.seatArray[4] = new Seat(this.x - 20, this.y + 100); //left 3
    this.seatArray[5] = new Seat(this.x + 60, this.y + 20); //right 1
    this.seatArray[6] = new Seat(this.x + 60, this.y + 60); //right 2
    this.seatArray[7] = new Seat(this.x + 60, this.y + 100); //right 3
  }else if(this.totalSeats == 8 && this.direction == "bar"){
    this.seatArray[1] = new Seat(this.x - 20, this.y + 20); //left side
    this.seatArray[0] = new Seat(this.x + 10, this.y + 60); //bottom 1
    this.seatArray[2] = new Seat(this.x + 50, this.y + 60); //bottom 2
    this.seatArray[3] = new Seat(this.x + 90, this.y + 60); //bottom 3
    this.seatArray[4] = new Seat(this.x + 130, this.y + 60); //bottom 4
    this.seatArray[5] = new Seat(this.x + 170, this.y + 60); //bottom 5
    this.seatArray[6] = new Seat(this.x + 210, this.y + 60); //bottom 6
    this.seatArray[7] = new Seat(this.x + 240, this.y + 20); //right side
  }

  //setup ends here

  this.display = function(){ //displays the tables/bar and the seats
    this.tableSet();
    for(i=0; i<this.seatArray.length; i++){
      this.seatArray[i].displaySeat();
    }
  }

  this.setOccupied = function(){ //used to set table to occupied
    this.isOccuppied = true;
  }

  this.setVacant = function(){ //used to set table to empty
    this.isOccupied = false;
  }

  this.tableSet = function(){ //determines the shape and color of the tables
    stroke(0);
    strokeWeight(3);
    fill(this.tableColor);
    if(this.isOccupied == true){
      fill(this.occupiedColor);
    }
    rect(this.x,this.y,this.tableWidth,this.tableHeight);
  }

  this
}
