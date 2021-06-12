class launcher{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }

        this.pointB = pointB
        this.launcher= Constraint.create(options);
        World.add(world, this.launching);
    }
    attach(body){
        this.launching.bodyA = body;
    }
    fly(){
        this.launching.bodyA = null;
    }

}