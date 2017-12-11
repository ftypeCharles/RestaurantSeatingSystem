var tables = [];
var totalTables = 7; //must be updated as tables are added or deleted

function setup() {
  var rS = [ //rS means restarauntSetup
    8, 100, 150, "up", "a1", //define the center of the object
    8, 700, 150, "up", "b1",
    4, 300, 300, "up", "a2",
    4, 500, 300, "up", "b2",
    6, 100, 400, "side", "a3",
    6, 700, 400, "side", "b3",
    8, 315, 20, "bar", "c1"
  ];
  var cnv = createCanvas(800,600);
  cnv.position((windowWidth - width) / 2, 40);
  drawText();
  var counter = 0;

  for(i=0; i<totalTables*5; i=i+5){//4 for the number of variable the table object takes
    tables[counter] = new Table(rS[i], rS[i+1], rS[i+2], rS[i+3], rS[i+4]);
    counter = counter + 1;
  }
}

function checkMouse(){
  for (let i = 0; i < tables.length; i++) {
    tables[i].clicked(mouseX, mouseY);
  }
}

function draw() {
  background(30, 144, 255);
  drawText();
  for(let i=0; i<totalTables; i++){
    tables[i].display();
  }
  if(mouseIsPressed){
    checkMouse();
  }
  serverTotals();
  //drawTotal();
}

function drawText() {
  textSize(40);
  textFont("Impact");
  fill(255);
  stroke(0);
  strokeWeight(4);
  text("Entrance", 580, 560);
}

function drawTotal(){
  textSize(40);
  textFont("Impact");
  fill(255);
  stroke(0);
  strokeWeight(4);
  text("Today's total: $" , 560, 560);
}

function serverTotals(){
  textSize(20);
  textFont("TimesNewRoman");
  strokeWeight(1);
  fill(255);

  var serverACustomers = 0;
  var serverBCustomers = 0;
  var serverCCustomers = 0;

  serverACustomers = tables[0].seatsFilled() + tables[2].seatsFilled() + tables[4].seatsFilled();
  serverBCustomers = tables[1].seatsFilled() + tables[3].seatsFilled() + tables[5].seatsFilled();
  serverCCustomers = tables[6].seatsFilled();


  text("Server A Customers serving: " + serverACustomers, 200, 540);
  text("Server B Customers serving: " + serverBCustomers, 200, 560);
  text("Server C Customers serving: " + serverCCustomers, 200, 580);
}

function seatParty(partyString, sectionNumber){
  partyString = partyString.outerHTML;
  console.log(partyString);
  partyString = partyString.split(": ");
  var partyName = partyString[1].split(" ");
  var partyName = String(partyName[0]);
  var partyNumber = parseInt(partyString[2].charAt(0));
  console.log(partyName + " " + partyNumber + " " + sectionNumber);
  for(let i=0; i<totalTables; i++){
    if(tables[i].tableSectionNumber == sectionNumber && tables[i].partyNumber == 0){
      tables[i].setOccupied(partyName, partyNumber);
    }
  }
}
