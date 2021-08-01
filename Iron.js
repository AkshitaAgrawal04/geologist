class Iron {
    constructor(x,y,width,height){
        var options={
            density:100,
            friction:100,
            restituion:0,
        }
        this.obj= Bodies.rectangle(x,y,width,height,options);
        this.width= width;
        this.height=height;
        World.add(world, this.obj);
    }

    display(){
        var pos= this.obj.position;
        rectMode(CENTER);
        fill(203,205,205);
        rect(pos.x,pos.y,this.width,this.height);
    }
}