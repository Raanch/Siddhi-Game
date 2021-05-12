class Stone{
   constructor(x,y,width,height){
    var option={
        restituion:0.9,
        density:0.8
    }
    this.body=Bodies.rectangle(x,y,width,height,option)
    this.width=width
    this.height=height
    World.add(world,this.body)
}
display(){
    push()
    translate(this.body.position.x,this.body.position.y)
    rotate(this.body.angle)
    strokeWeight(2)
    stroke("black")
    rectMode(CENTER)
    rect(0,0,this.width,this.height)
    pop()
}
}