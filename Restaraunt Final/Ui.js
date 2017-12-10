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
    8, 315, 20, "bar", "bar"
  ];
  var cnv = createCanvas(800,600);
  cnv.position((windowWidth - width) / 2, 40);
  cnv.background(30, 144, 255);
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
  for(let i=0; i<totalTables; i++){
    tables[i].display();
  }
  if(mouseIsPressed){
    checkMouse();
  }
  serverTotals();
}

function drawText() {
  textSize(40);
  textFont("Impact");
  fill(255);
  stroke(0);
  strokeWeight(4);
  text("Entrance", 330, 560);
}

function serverTotals(){
  textSize(20);
  textFont("TimesNewRoman");
  strokeWeight(1);
  fill(255);
  text("Server a total:", 100, 500);
  text("Server b total:", 100, 520);
  text("Bartender total:", 100, 540);
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
