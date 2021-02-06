class Stone{
    constructor(x, y, radius)
    {
        var options = {
            isStatic: false,
            restitution: 0,
            friction: 1,
            density: 1.2
        }
        this.body = Bodies.circle(x, y, radius, options);
        this.image = loadImage("images/stone.png");
        //include this section in order to use these properties
        //in the display function(remember: x, y, and radius are local variables)
        this.x = x; 
        this.y = y; 
        this.radius = radius;
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        ellipseMode(CENTER);
        imageMode(CENTER);
        image(this.image, 0, 0, this.radius*3, this.radius*3);
        pop();
    }
}