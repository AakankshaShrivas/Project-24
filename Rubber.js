class Rubber{
    constructor(x,y,r){
        var options={
            density:1,
            restitution:0.3,
            friction:5

        }
        this.body=Bodies.circle(x,y,r,options);
        this.x=x;
        this.y=y;
        this.r=r;
        World.add(myworld,this.body)
    }
    display()
	{
			var pos=this.body.position;		
			push()
			translate(pos.x, pos.y);
			ellipseMode(RADIUS)
			strokeWeight(4);
			stroke("black");
			fill("darkblue");
			ellipse(0,0,this.r, this.r);
			pop()
	}
}