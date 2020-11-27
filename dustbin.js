class dustbin {
    constructor(x, y,width,height)
    {
        var opt = {
            isStatic: true
        }
        this.body=Bodies.rectangle(x, y , width, height, opt);
        this.w=width;
        this.h=height;
        World.add(world, this.body)
    }
    display()
        {
var pos= this.body.position
rectMode(CENTER);
fill(255);
rect(pos.x, pos.y, this.w, this.h);
        }
    
}