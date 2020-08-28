const quadraticEquationRes = ([a,b,c]) => {
    
    const discriminant = b*b-4*a*c

    if(a==0) return console.log(`Ощибка a - должно быть > 0 или < 0 `);

    if(discriminant < 0){
        return console.log(`Уравнение имеет вид: ${a}x + ${b}x + ${c} = 0 \nКорней нет!`)
    
    } 
    else if(discriminant==0){
        x1 = -b/(2*a)
        return console.log(`Уравнение имеет вид: ${a}x + ${b}x + ${c} = 0 \nКорень уравнения: ${x1}`)
    }
    else if(discriminant >0){
        let x1 = (-b + Math.sqrt(discriminant)/ (2*a))
        let x2 = (-b - Math.sqrt(discriminant)/ (2*a))
        return console.log(`Уравнение имеет вид: ${a}x + ${b}x + ${c} = 0 \nКорни уравнения: ${x1} , ${x2}`)
    }
    
}   


