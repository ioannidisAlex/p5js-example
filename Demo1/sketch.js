let letters= []; 
let strob;
function setup() {
  createCanvas(600, 600);
  for (let i = 0; i < 2; i++) {
    letters.push(new A(50, 50));
  }
  print(letters[1].startpoint[1]);
}

function draw() {
  background(170);

  for (let i = 0; i < letters.length; i++) {
    letters[i].update();

    letters[i].show();
  }
  
}


function mouseDragged(){
 if (mouseX>280 && mouseY>280 &&mouseX<=320 && mouseY<=320)
 { letters.push(new A(5,5));
  letters.push(new L(-20,-20));
  letters.push(new E(-20,-20));
  letters.push(new X(-20,-20));}
   if (letters.length <= 200 && mouseX<=320 && mouseY<=320)
 { letters.push(new A(5,5));
  letters.push(new L(-20,-20));
  letters.push(new E(-20,-20));
  letters.push(new X(-20,-20));
 }
}
function mousePressed() {
//  letters.push(new A(mouseX, mouseY));
  if(letters.length >=42)
    letters.splice(0,1);
   if      (mouseX>=300 && mouseY>=300)
    letters.push(new A(mouseX, mouseY));
  else if (mouseX>300 && mouseY<=300)
    letters.push(new L(mouseX, mouseY));
  else if (mouseX<=300 && mouseY>300)
    letters.push(new E(mouseX, mouseY));
  else if (mouseX<300 && mouseY<300)
    letters.push(new X(mouseX, mouseY));
  if(300 >=mouseX&& mouseX > 250 && 300>=mouseY&& mouseY >250)
    letters.push(new A(mouseX, mouseY));
  if(350 >=mouseX&& mouseX > 300 && 300>=mouseY&& mouseY >250)
    letters.push(new E(mouseX, mouseY));
  if(300 >=mouseX&& mouseX > 250 && 350>=mouseY&& mouseY >300)
    letters.push(new L(mouseX, mouseY));
  if(350 >= mouseX && mouseX > 300 && 350 >= mouseY && mouseY >300)
    letters.push(new X(mouseX, mouseY));
  
}

class X{
  constructor(x,y)
  {
    this.klimaka=1;
    this.shape = [396,380, 440,440 ,  484,380, 440,440, 484,500 ,  440,440 ,396 ,500 , 440,440];
    this.trans= [x,y ,x,y ,x,y , x,y,x,y ,x,y ,x,y , x,y] ;
  }
  
  show()
  {
    if(this.klimaka < 280) {
    //stroke(255);
      strob= (this.klimaka +10)% 255 // might svisw to 255
      stroke(strob);
      beginShape();
      for (let i = 0; i <= 7; i++) {
        let pos_x = this.trans[2*i];
        let pos_y = this.trans[2*i+1];
        noFill();
     //   vertex(pos_x, pos_y );
        vertex(pos_x+random(-0.02*(280-this.klimaka),+0.02*(280-this.klimaka)), pos_y );

      }
      endShape();}
    else{
        //stroke(255);
      strob= (this.klimaka +10)% 255 // might svisw to 255
      stroke(strob);
      beginShape();
      for (let i = 0; i <= 9; i++) {
        let pos_x = this.trans[2*i];
        let pos_y = this.trans[2*i+1];
        noFill();
        vertex(pos_x+random(-2,2), pos_y+random(-2,2) );

      }
      endShape();
    }
  }
  
  update(){
    this.klimaka = this.klimaka + 0.12;
    for( let i= 0 ; i <= 7 ; i++)
    {
      let vec=generate_letter(this.trans[2*i],this.trans[2*i+1],this.shape[2*i],this.shape[2*i+1],this.klimaka);
      this.trans[2*i]=vec.x;
      this.trans[2*i+1]=vec.y;
    }
    
  }
  
}
class E{
  constructor(x,y)
  {
    this.klimaka=1;
    this.shape = [484,55, 390,55 ,  390,160, 390,245, 485,245, 390,245, 390,145, 450,145];
    this.trans= [x,y ,x,y ,x,y , x,y,x,y ,x,y ,x,y , x,y] ;
  }
  
  show()
  {
    //stroke(255);
      strob= (this.klimaka +10)% 255 // might svisw to 255
      stroke(strob);
      beginShape();
      for (let i = 0; i <= 7; i++) {
        let pos_x = this.trans[2*i];
        let pos_y = this.trans[2*i+1];
        noFill();
     //   vertex(pos_x, pos_y );
        vertex(pos_x+random(-0.02*(280-this.klimaka),+0.02*(280-this.klimaka)), pos_y );

      }
      endShape();
  }
  
  update(){
    this.klimaka = this.klimaka + 0.12;
    for( let i= 0 ; i <= 7 ; i++)
    {
      let vec=generate_letter(this.trans[2*i],this.trans[2*i+1],this.shape[2*i],this.shape[2*i+1],this.klimaka);
      this.trans[2*i]=vec.x;
      this.trans[2*i+1]=vec.y;
    }
    
  }
  
}
class L{
  constructor(x,y)
  {
    this.klimaka=1;
    this.shape = [120,335, 120,440 ,  120,540, 224,540];
    this.trans= [x,y ,x,y ,x,y , x,y] ;
  }
  
  show()
  {
    //stroke(255);
      strob= (this.klimaka +10)% 255 // might svisw to 255
      stroke(strob);
      beginShape();
      for (let i = 0; i <= 3; i++) {
        let pos_x = this.trans[2*i];
        let pos_y = this.trans[2*i+1];
        noFill();
     //   vertex(pos_x, pos_y );
        vertex(pos_x+random(-0.02*(280-this.klimaka),+0.02*(280-this.klimaka)), pos_y );

      }
      endShape();
  }
  
  update(){
    this.klimaka = this.klimaka + 0.12;
    for( let i= 0 ; i <= 3 ; i++)
    {
      let vec=generate_letter(this.trans[2*i],this.trans[2*i+1],this.shape[2*i],this.shape[2*i+1],this.klimaka);
      this.trans[2*i]=vec.x;
      this.trans[2*i+1]=vec.y;
    }
    
  }
  
}
class A {
   constructor(x,y)
  {
    this.klimaka=1;
    this.startpoint= [x,y];
    this.shape = [80,250, 103,175 ,127,100,150,25, 173,100, 196,175 ,219,250 , 197,175 , 150,177 ,103,175];
    this.trans= [x,y,x,y,x,y,x,y,x,y,x,y,x,y,x,y,x,y,x,y];
  }
  
  show(){
    
    if(this.klimaka<280){
        strob= (this.klimaka +10)% 255 // might svisw to 255
        stroke(strob);
        beginShape();
        for (let i = 0; i <= 9; i++) {
        let pos_x = this.trans[2*i];
        let pos_y = this.trans[2*i+1];
        noFill();
        vertex(pos_x+random(-0.02*(280-this.klimaka),+0.02*(280-this.klimaka)), pos_y );
    }
    endShape();
      
    }
    else{
      //stroke(255);
      strob= (this.klimaka +10)% 255 // might svisw to 255
      stroke(strob);
      beginShape();
      for (let i = 0; i <= 9; i++) {
        let pos_x = this.trans[2*i];
        let pos_y = this.trans[2*i+1];
        noFill();
        vertex(pos_x, pos_y );

      }
      endShape();
    }
  }
  
  update() {
    this.klimaka = this.klimaka + 0.12 ;
    for (let i = 0; i <= 9; i++)
    {   
      let vec=generate_letter(this.trans[2*i],this.trans[2*i+1],this.shape[2*i],this.shape[2*i+1],this.klimaka);
      this.trans[2*i]=vec.x;
      this.trans[2*i+1]=vec.y;
    }
  }
  
}

function generate_letter(startx, starty, end_pointx, end_pointy, scale)
{
  let new_x = startx + (end_pointx - startx)*scale/300;
  let new_y = starty + (end_pointy - starty)*scale/300;
  let end_point = createVector(new_x,new_y);
  return end_point;
}