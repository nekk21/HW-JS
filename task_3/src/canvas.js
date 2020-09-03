export class Shape {
    constructor(){ 
        
    }

    draw = () => {
        
    }
}

export class Box extends Shape{
    constructor (){
        super()
    }

    draw = () => {
        const canvas = document.createElement('canvas')
        const ctx = canvas.getContext('2d')
        document.body.appendChild(canvas)

        ctx.fillStyle  = "magenta"
        ctx.fillRect(100, 25, 100, 100)
     
    }
    
}

export class Circle extends Shape{
    constructor(){
        super()
    }
    draw = () => {
        const canvas = document.createElement('canvas')
        const ctx = canvas.getContext('2d')
        document.body.appendChild(canvas)

        ctx.fillStyle = "red"
        ctx.arc(canvas.width/2, canvas.height/2, 60, 0, Math.PI *2 )
        ctx.fill()
    
    }
}

export class Triangle extends Shape{
    constructor(){
        super()
    }
    draw = () => {
        const canvas = document.createElement('canvas')
        const ctx = canvas.getContext('2d')
        document.body.appendChild(canvas)

        ctx.strokeStyle = "blue"
        ctx.fillStyle = "blue"
        ctx.beginPath();
        ctx.moveTo(150, 25)
        ctx.lineTo(100,125)
        ctx.lineTo(200,125)
        ctx.closePath()
        ctx.stroke()
        ctx.fill()
        
    }
}