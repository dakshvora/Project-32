class Box{
    constructor(x, y, width, height) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.Visibility= 225;
        World.add(world, this.body);
      }
      display(){
        if(this.body.speed < 7){
 
          push();
          var angle = this.body.angle;
          fill("yellow")
          translate(this.body.position.x, this.body.position.y);
          rotate(angle);
          rectMode(CENTER);
           rect(0, 0, this.width, this.height);
          pop();
         }
         else{
           World.remove(world, this.body);
           push();
           this.Visiblity = this.Visiblity - 5;
           //tint(255,this.Visiblity);
              pop();
         }
        }

      }

