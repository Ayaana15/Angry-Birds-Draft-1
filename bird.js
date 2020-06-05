class Bird{
    constructor(x,y,width,height) {
        var options = {
        }
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width = width;
    this.height = height;

    
World.add(world,this.body);
    }
    display(){
        fill("red")
        var pos = this.body.position 
        var angle = this.body.angle
        pos.x = mouseX;
        pos.y = mouseY;
        push();
        translate(pos.x,pos.y)
        rotate(angle)
        rectMode(CENTER)
        rect(0,0,this.width,this.height)
        pop();
    }
    
    
    
    };
    
    