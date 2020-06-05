class Pig{
    constructor(x,y) {
        var options = {friction:1
        }
    this.body = Bodies.rectangle(x,y,50,40,options);
    this.width = 50;
    this.height = 40;
    World.add(world,this.body);
    }
    display(){
        fill("pink")
        var pos = this.body.position 
        var angle = this.body.angle
        push();
        translate(pos.x,pos.y)
        rotate(angle)
        rectMode(CENTER)
        rect(0,0,this.width,this.height)
        pop();
    }
    
    
    
    };
    
    