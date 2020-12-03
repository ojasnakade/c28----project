class Tree{
    constructor(x,y){
        var options={
            isStatic:true
        }
        this.x = x;
        this.y = y;
        this.body=Bodies.rectangle(x,y,550,550,options);
        this.width=550;
        this.height=550;
        this.image=loadImage("tree.png");
        World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        push();    
        imageMode(CENTER);
        image(this.image,this.x ,this.y,this.width,this.height);
        pop();
    }
}