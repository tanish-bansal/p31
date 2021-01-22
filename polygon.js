class Polygon {
    constructor(x, y,width,height) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y,width,height,options );
        this.width = width;
        this.height = height;
        this.image = loadImage("polygon.png");
        World.add(world, this.body);
        this.visibility=255;
       
      }
      display(){
        var angle = this.body.angle;
/*
       console.log(this.body.speed)
       if(this.body.speed<3){
        display()
        }
        else{
          World.remove(world,this.body)
          
          this.visibility= this.visibility-5
        tint(255, this.visibility)
         } */
        push()
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
      
}}