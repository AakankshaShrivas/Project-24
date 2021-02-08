class Sand{
	constructor(x,y,r)
	{
		var options={
			restitution:0.3,
			friction:5,
			density:1
		}
		this.x=x;
		this.y=y;
		this.r=r
		this.body=Bodies.circle(this.x, this.y, this.r, options)
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
			fill("red");
			ellipse(0,0,this.r, this.r);
			pop()
			
	}

}