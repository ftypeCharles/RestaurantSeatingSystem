var tables = [];
var totalTables = 7; //must be updated as tables are added or deleted

function setup() {
  var counter = 0;
  var rS = [ //rS means restarauntSetup
    8, 100, 150, "up", //define the center of the object
    8, 700, 150, "up",
    4, 300, 300, "up",
    4, 500, 300, "up",
    6, 100, 400, "side",
    6, 700, 400, "side",
    8, 315, 20, "bar"
  ];
  createCanvas(800,600);
  background(100,100,100);
  for(i=0; i<totalTables*4; i=i+4){//4 for the number of variable the table object takes
    tables[counter] = new Table(rS[i], rS[i+1], rS[i+2], rS[i+3]);
    counter = counter + 1;
  }
}

function draw() {
  for(let i=0; i<totalTables; i++){
    tables[i].display();
  }
}
