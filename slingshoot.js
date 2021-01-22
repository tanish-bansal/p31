class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 7
        }
        //this.sling1=loadImage("polygon.png")
       
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
        
    }

    fly(){
        this.sling.bodyA=null;
    }
    attach(body){
        this.sling.bodyA=body
    }
    display(){
       // image(this.sling1,100,200,40,40)
      
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(3);
            stroke(48, 22, 8)
            //ImageMode (CENTER);
        //image(sling1_img,sling1.position.x,sling1.position.y,40,40)
           // line(pointA.x-20, pointA.y, pointB.x-10, pointB.y);
            line(pointA.x-20, pointA.y, pointB.x+30, pointB.y-3);
            
           
        }
    }
    
}