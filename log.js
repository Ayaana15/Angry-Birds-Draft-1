class Log{
    constructor(x,y,height, angle) {
        var options = {
        }
    this.body = Bodies.rectangle(x,y,30,height,options);
    this.width = 30;
    this.height = height;
Matter.Body.setAngle(this.body,angle)
    World.add(world,this.body);
    }
    display(){
        fill("light brown")
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
    
    