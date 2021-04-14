var raf = [4.9, 3.2, 4.55, 2.92, 0.47, 0.81]

function setup() {
  createCanvas(400,400);
  //raf[0] = random(1,5);
  //raf[1] = random(0,5.1);
  //raf[2] = random(0,5.1);
  //raf[3] = random(0,5.1);
  //raf[4] = random(0.1,1);
  //raf[5] = random(0.1,1);
  //console.log(raf[0]+""+raf[1]+""+raf[2]+""+raf[3]+""+raf[4]+""+raf[5]+"")
}

function draw() {
  background(220);
  let c = color('#1f8056');
  noFill()
  stroke(c);
  strokeWeight(1+raf[0]/10);
  arc(width/2,height/2, raf[0]*30,raf[0]*30, 0+(frameCount/36),PI+HALF_PI+(frameCount/36));
  strokeWeight(1+raf[1]/10);
  arc(width/2,height/2, raf[1]*30,raf[1]*30, 0+1+1.1*(frameCount/36),PI+HALF_PI+1+1.1*(frameCount/36));
  strokeWeight(1+raf[2]/10);
  arc(width/2,height/2, raf[2]*30,raf[2]*30, 0+2-0.1*(frameCount/36),PI+HALF_PI+2-0.1*(frameCount/36));
  strokeWeight(1+raf[3]/10);
  arc(width/2,height/2, raf[3]*30,raf[3]*30, 0+3+1.01*(frameCount/36),PI+HALF_PI+3+1.01*(frameCount/36));
  strokeWeight(1+raf[4]/10);
  arc(width/2,height/2, raf[4]*30,raf[4]*30, 0+4+0.71*(frameCount/36),PI+HALF_PI+4+0.71*(frameCount/36));
  strokeWeight(1+raf[5]/10);
  arc(width/2,height/2, raf[5]*30,raf[5]*30, 0+5+11*(frameCount/36),PI+HALF_PI+5-11*(frameCount/36));
  //strokeWeight(1+raf[i]/10);
  //arc(width/2,height/2, raf[i]*30,raf[i]*30, 0+i+(frameCount/36),PI+HALF_PI+i+(frameCount/36));
  
  
  //strokeWeight(1+4/10);
  //arc(width/2,height/2,4*30,4*30,PI,PI+HALF_PI);
}