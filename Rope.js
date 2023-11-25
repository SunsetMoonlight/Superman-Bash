class Rope {
    constructor(bodyA, pointB){
    var options={
        stiffness : 1.2,
        length : 250,
        bodyA : bodyA,
        pointB : pointB
    }
    this.pointB = pointB
    this.rope = Constraint.create(options)
    World.add(world,this.rope)
    }
    attach(body){
        this.rope.bodyA = body

    }

    fly(){
        this.rope.bodyA = null
    }
    
    display(){
        if(this.rope.bodyA){
        var pointB = this.pointB
        var pointA = this.rope.bodyA.position
        
        push()
        stroke(48,22,8)
            strokeWeight(0)
        line(pointB.x, pointB.y, pointA.x, pointA.y)
        pop()
        }
    }
    }
    