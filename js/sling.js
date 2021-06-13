class sling{
    constructor(bodyA,pointB){
        var option= {

        bodyA:bodyA,
        pointB:pointB,
        stiffness:0.05 , 
        length:20  
        }
         this.rope=Constraint.create(option)
         this.pB = pointB //this.pB.x--> pointB.x
         World.add(world,this.rope)
    }

    Fly(){
        this.rope.bodyA=null
    }
    display(){

        if(this.rope.bodyA){
            strokeWeight(5)
            line(this.rope.bodyA.position.x,this.rope.bodyA.position.y, this.pB.x , this.pB.y)
        }
    }
    
}