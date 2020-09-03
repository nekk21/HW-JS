export class Shape {
    constructor(color){ 
        this.color = color
    }

    draw () {
        this.canvas = document.createElement('canvas')
        this.ctx = this.canvas.getContext('2d')
        this.ctx.fillStyle  = this.color
        document.body.appendChild(this.canvas)
    }
    
}

export class Box extends Shape{
    constructor (color){
        super(color)
    }

    draw (){
        super.draw()
        this.ctx.fillRect(100, 25, 100, 100)
    }
    
}

export class Circle extends Shape{
    constructor(color){
        super(color)
    }
    draw(){

        super.draw()
        this.ctx.arc(this.canvas.width/2, this.canvas.height/2, 60, 0, Math.PI *2 )
        this.ctx.fill()
    
    }
}

export class Triangle extends Shape{
    constructor(color){
        super(color)
    }

    draw(){
        super.draw()
        this.ctx.strokeStyle = "blue"
        this.ctx.beginPath();
        this.ctx.moveTo(150, 25)
        this.ctx.lineTo(100,125)
        this.ctx.lineTo(200,125)
        this.ctx.closePath()
        this.ctx.stroke()
        this.ctx.fill()
        
    }
}