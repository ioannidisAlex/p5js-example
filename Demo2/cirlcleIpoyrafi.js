let colors = ["#E3C7CF","#C6A2E0","#FDC6CB","#A8EFE6","#93A96F","#67FB7F","#C38996","#B3B19F","#D685FA","#86C9C9","#C4C08A","#C8AAB6","#C17A8E","#6C6682","#B09B80","#E1C0C6","#9086A8","#C9C596","#B1D0D2","#ECDDFD","#9AACA5","#C7F0C6","#9CB2D5","#7F9FEC","#CEFB86","#F0E08C","#C7B8D4","#F39C6A","#AE788A","#C3CDB4","#90E9A1","#CD74CB","#D8C5E0","#D3BB9B","#BFA1C2","#B8DB9D","#88A6AA","#B6A370","#8A7EA8","#8FBCBF","#E36DB2","#98D8D2","#A8C2FD","#7770D0","#8EA6FF","#F06FA0","#C282F5","#DAF0E0","#AEDAAD","#88A6CB","#71FCB9","#A2B781","#96CD83","#E96596","#C9A68C","#E9EDD3","#CCD491","#AF6899","#E6BB87","#828FA9","#7892C3","#717572","#EFC4AC","#FC93B8","#6ACD8C","#7464C7","#9A80F3","#EF9167","#7B9C73","#F66AA2","#FDD6BC","#E8FCD1","#71FEDF","#6EF27D","#A9A89D","#FBDF64","#78A98C","#BE768E","#8ACFE4","#E2AEB1","#FDAC66","#F1E6C5","#6BEEF7","#9DA094","#F46687","#9B8D68","#B3CAFA","#868BC4","#7CA9FB","#D7EA97","#BA84D0","#C785E7","#9F8D76","#CF67BA","#ADEE6E","#E1D26F","#B5CDA4","#C1D97F","#FD73CB"]
let follars = ["#230126","#230126","#230126","#230126","#230126","#230126","#1C1D22","#1C1D22","#1C1D22","#1C1D22","#1C1D22","#1C1D22","#211218","#211218","#211218","#211218","#042D17","#042D17","#042D17","#042D17","#28231A","#28231A","#28231A","#28231A","#28231A","#28231A","#1D080E","#1D080E","#1D080E","#1D080E","#1D080E","#1D080E","#172D10","#172D10","#172D10","#071F16","#071F16","#071F16","#0E2224","#0E2224","#0E2224","#240918","#240918","#240918","#140F2A","#140F2A","#140F2A","#0C0F0C","#0C0F0C","#0C0F0C","#090908","#090908","#090908","#0C0F0C","#090908","#090908","#090908","#0C0F0C","#090908","#090908","#090908","#0C0F0C","#090908","#090908","#090908"]



class plakaki {
  constructor(velocity,x,y,dx,r,color,theta)
  {
    this.theta= theta
    this.diverse=r
    this.position=[x,y]
    this.dx= dx
    this.theta= theta
    this.color= color
    this.velocity= velocity
  }
    show(){
      push()
      translate(this.position[0],this.position[1])
      scale(this.dx/400)
      rotate(this.theta)
      stroke(this.color)
      if(this.diverse == 1)
        strokeWeight(2);
      else if(this.diverse == 3)
        strokeWeight(0.5)
      beginShape();
      curveVertex(-180,140)
      curveVertex(-180,140)
      curveVertex(-165,-100)
      curveVertex(-155,-30)
      curveVertex(-145,+40)
      curveVertex(-125,+80)
      curveVertex(-105,-30)
      curveVertex(-100,+10)
      curveVertex(-95,+30)
      vertex(-90,-15)
      curveVertex(-80,-0)
      curveVertex(-70,+5)
      curveVertex(-50,10)


      curveVertex(-10,30)
      curveVertex(10,-0)
      curveVertex(-10,-20)
      curveVertex(-35,-0)
      curveVertex(-15,18)
      curveVertex(-15,18)
      curveVertex(15,28)
      curveVertex(25,35)
      curveVertex(28,38)
      curveVertex(32,5)
      curveVertex(35,4)
      curveVertex(39,3)
      curveVertex(44,2)
      curveVertex(50,1)
      curveVertex(62,-1)
      curveVertex(70,0)
      curveVertex(180,0)
      curveVertex(180,0)
      //curveVertex()
      endShape();
      pop()
      //this.theta+= 0.05
      //this.dx = (this.dx+random(50))/0.5
      if(this.diverse==-1){
        if(this.dx <400){
          this.color = colors[Math.floor(random(colors.length))]
        }
        else
          this.color = "#fff200"
        this.dx = (this.dx+random(50))/(0.95-this.velocity)
      }
      //if(random(101)>97)
        if(this.dx >500 && plakakia.length>40)
          plakakia.splice(0,1);
      //this.dx = (this.dx+random(50))/1.1
      //this.color = colors[Math.floor(random(colors.length))]
  }
}