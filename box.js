

/*lass Box extends BaseClass{
    constructor(x, y, width, height) {
      super(x,y,width,height);
      this.body = Bodies.rectangle(x,y,width,height);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
      this.visibility=255

        
        
      rect(this.image,this.body.position.x,this.body.position.y,50,50)
      
    }
  display(){
    console.log(this.body.speed)
        if(this.body.speed<3){
          super.display()
        }
        else{
          //World.remove(world,this.body)
          push()
          this.visibility= this.visibility-5
          tint(255, this.visibility)

          rectMode(CENTER);
        rect(this.image, 0, 0, this.width, this.height);
        }
    }}//*/
  




  class Box {
    constructor(x, y, width, height,options) {

        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        
        World.add(world, this.body);
        this.visibility=255;
      }
      display(){
        
        var angle = this.body.angle;
        
       // console.log(this.body.speed)
        if(this.body.speed<6){


        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        rectMode(CENTER);
        rect( 0, 0, this.width, this.height);
       pop();
        }

        else{
          World.remove(world,this.body)
          push()
          this.visibility= this.visibility-5
          tint(255, this.visibility)
          //rect( 0, 0, this.width, this.height);
          pop();
      }
      }
      score(){ 
      if (this.visibility < 0 && this.visibility > -1005){ score++ }
     
      
      }
  }

  