let density = 60;
let s = density
function setup() {
  createCanvas(400, 400);
}
let xl=0;
let yl=0;
let xk=0;
let yk=0;
let xm=0;
let ym=0;
let mousehasbeenclicked=0;
function draw() {
  background(220);
  bl(0,159,62);
  if(mousehasbeenclicked==1&&numberoftimes==4){
    bl(xl,yl,61);
    bl(xk,yk,2);
    bl(xm,ym,122);
  }
}
function bl(x, y, w) {
  for (let i = 0; i < w; i += random(s/5,s/7)) {
    line(x+i,y,x+s/3+i,y+s/3);
    line(x+s/3+i,y+s/3,x+s/3+i,y+3.5*s/6);
    line(x+s/3+i,y+5*s/6,x-s/6+i,y+s/3)
  }
  //console.log(i)
  let i= w/10*s/6;
  line(x+i,y,x+s/3+i,y+s/3);
  line(x+s/3+i,y+s/3,x+s/3+i,y+3.5*s/6);
  line(x+s/3+i,y+5*s/6,x-s/6+i,y+s/3)
}
var numberoftimes =1;
function mouseClicked(){
  console.log(numberoftimes);
  if(resettime()==1){
    numberoftimes =1;
  } 
  if(firsttime()==1){
    xl= mouseX;
    yl= mouseY;
    numberoftimes +=1;
    return;
  }
  if(secondtime()==1){
    xk= mouseX;
    yk= mouseY;
    numberoftimes +=1;
    return ;
  }
  if(thirdtime()==1){
    xm= mouseX;
    ym= mouseY;
    numberoftimes +=1;
    //numberoftimes =1;
    mousehasbeenclicked=1;
    return;
  }
}
function resettime(){
  if(numberoftimes ==4){
    return 1;} 
  else 
    return 0;
}

function firsttime(){
  if(numberoftimes ==1){
    return 1;} 
  else 
    return 0;
}

function secondtime(){
    console.log("dada")
  if(numberoftimes ==2){
    return 1;} 
  else 
    return 0;
}

function thirdtime(){
  if(numberoftimes ==3){
    return 1;} 
  else 
    return 0;
}