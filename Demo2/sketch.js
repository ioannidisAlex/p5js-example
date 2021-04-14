var plakakia=[];
var fontoplakakia=[];
var pliktro=0;
var alef;
var mic;

var distance = 20;
var angle = 0

function setup() {
  var rand=0;
  createCanvas(windowWidth, windowHeight);
  background(22);
for(var trompetes=0; trompetes<100;trompetes++){

  angle += 0.5
  distance += 2.5
  let x = sin(angle) * distance +width/2
  let y = cos(angle) * distance +height/2
  rand= random(3)
  fontoplakakia.push(new plakaki(0,x+rand,y,25,2,"#ffffff",0))
  fontoplakakia.push(new plakaki(0,x+rand,y,25,1,"#fff200",0))
  fontoplakakia.push(new plakaki(0,x+rand,y,25,1,"#fff200",0))
  fontoplakakia.push(new plakaki(0,x+rand,y,25,1,"#fff200",0))
  fontoplakakia.push(new plakaki(0,x+rand,y,25,1,"#fff200",0))
  fontoplakakia.push(new plakaki(0,x+rand,y,25,1,"#fff200",0))
}
  //for(var tx=1; tx<134; tx++)
  //  for(var ty=1; ty<60; ty++)
  //plakakia.push(new plakaki(tx*7+100, ty*7+60,55,3,"#fff200",0))
  frameRate(12)
  noFill()
  mic = new p5.AudioIn();
  mic.start();
}

function draw() {
  background(45)
  var vlo = mic.getLevel()
  console.log(vlo)
  if(vlo >0.00013)
    plakakia.push(new plakaki(vlo,width/2,height/2,vlo*200,-1,"#fff200",0))
  for(var i=0; i<plakakia.length; i++){
    //console.log("hey");
    plakakia[i].show();
  }
  //console.log("hey")
  for(var k=0; k<fontoplakakia.length; k++){
    //console.log("hey");
    fontoplakakia[k].show();
  }
  //console.log(alef);
}

function mouseClicked(){
  //console.log(alef);
  //switch(alef) {
  if(alef == 0){
      fontoplakakia.push(new plakaki(0,mouseX, mouseY,10,1,"#fff200",0));
      return;}
  if(alef == 1){
      fontoplakakia.push(new plakaki(0,mouseX, mouseY,25,1,"#fff200",0))
      return;}
  if(alef == 2){
      fontoplakakia.push(new plakaki(0,mouseX, mouseY,60,1,"#fff200",0))
      return;}
  if(alef == 3){
      fontoplakakia.push(new plakaki(0,mouseX, mouseY,70,2,"#fff200",0))
      return;}
  if(alef == 4){
      console.log("yee");
      fontoplakakia.push(new plakaki(0,mouseX, mouseY,230,3,"#fff200",0))
      return;}
  if(alef == 5){
      fontoplakakia.push(new plakaki(0,mouseX, mouseY,280,3,"#fff200",0))
      return;}
  if(alef == 6){
      fontoplakakia.push(new plakaki(0,mouseX, mouseY,340,3,"#fff200",0))
      return;}
  if(alef == 7){
      fontoplakakia.push(new plakaki(0,mouseX, mouseY,410,3,"#fff200",0))
      return;}
  if(alef == 8){
      fontoplakakia.push(new plakaki(0,mouseX, mouseY,600,3,"#fff200",0))
      return;}
}

function keyPressed() {
  if (keyCode === ENTER) {
    if(pliktro>=0 && pliktro<=8){
      alef=pliktro
    }
  }
  else if(key<=8 && key>=0){
      pliktro=key;
  }
}