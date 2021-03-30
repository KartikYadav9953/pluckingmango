class chain{

    constructor(bodyA, pointB) {

var op={

    bodyA: bodyA,
    pointB: pointB,
    stiffness: 0.04,
    length: 10

}

            this.chain = Constraint.create(op);

       World.add(world, this.rubber);    

    }

display() {


    line(this.BodyA.position.x,this.BodyA.position.y, this.pointB.position.x, this.pointB.position.y)


}

}
