class Stone {
    constructor(x,y,width,height){
        var options= {
            density: 20,
            friction:9.5,
            restitution: 0,
        }
        this.object= Bodies.rectangle(x,y,width,height,options);
        this.width= width;
        this.height= height;
        World.add(world, this.object);
    }
    display(){
        var pos= this.object.position;
        rectMode(CENTER);
        fill("black");
        rect(pos.x, pos.y, this.width, this.height);
    }
}
