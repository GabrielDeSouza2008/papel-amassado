class Chao {
    constructor(x, y, w, h){
        this.body = Bodies.rectangle(x, y, w, h, {isStatic: true})
            World.add (world, this.body)
        this.w = w
        this.h = h
        this.x =  x
        this.y = y
}
display(){
    rectMode(CENTER) 
    rect(this.x, this.y,this.w, this.h)
}
}