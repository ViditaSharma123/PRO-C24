class Paper{
  constructor(x, y, diameter,options) {
      var options = {
          isStatic: false,
          restitution:0.3,
          friction:0.5,
          density:1.2
      }
      this.body = Bodies.circle(100,475,70,{isStatic:false}); 
      this.width = width;
      this.height = height;
 
      
    }
    display(){
 
      push();
      translate(this.body.position.x, this.body.position.y);
      pop();

      ellipse(200,200,40)
    }
}