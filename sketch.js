
var names = ["APHEX","KIERAN","NICOLAS","HYNES","ENO","BLAKE","JELINEK","SAKAMOTO","NOTO"];

var index = 0;

function preload() {
  fontregular = loadFont('NeueMachina-Regular.otf');
  }
  
function setup() {
  frameRate(8);
  createCanvas(windowWidth, windowHeight);
  // font = createFont(“CothamSans.otf”, 600);
}
  
  
function draw() {
  textHolder = names[int(map(mouseX, 0, width, 0, names.length))];
  noStroke();

  background(18,18,18);
  // textAlign(CENTER);
  fill(178,163,148);
  textAlign(CENTER, TOP);
  textFont(fontregular);
  textSize(230);
  text(textHolder,windowWidth/2,windowHeight/2);
}


