class Rope {
    constructor(bodyA,bodyB,offsetX,offsetY){
      this.offsetX = offsetX
      this.offsetY = offsetY
      var option = {
          bodyA : bodyA,
          bodyB : bodyB,
          pointB:{x:this.offsetX, y:this.offsetY},
         // stiffness : 0.5,
         // length :400,
      }
      
      this.rope = Constraint.create(option)
      World.add(world,this.rope)
    }

    display() {
      stroke (48,22,8)

    var pointA = this.rope.bodyA.position
    var pointB = this.rope.bodyB.position
    var ancher1X = pointB.x+this.offsetX
    var ancher1Y = pointB.y+this.offsetY
  line (pointA.x,pointA.y,ancher1X,ancher1Y)
 

   
}
       
}