class Ground {

    constructor(x, y, width, height) {
        var options = {

            isStatic: true

        }

        this.body = Bodies.rectangle(x, y, width, height, options);

        //NameSpacing(renaming width and height)
        this.width = width;
        this.height = height;
        World.add(world, this.body);
    }

    display() {
     //NameSpacing(renaming position of Ground)
        var pos = this.body.position;
        strokeWeight(2);
        fill("red");
        rect(pos.x, pos.y, this.width, this.height);

    }
}