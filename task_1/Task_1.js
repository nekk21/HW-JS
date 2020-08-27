const quadratic_equation_res = (array_of_abc = [1,0,-4]) => {
    a = array_of_abc[0] 
    b = array_of_abc[1] 
    c = array_of_abc[2]
    const Discriminant = b*b-4*a*c
    let x1 = (-b + Math.sqrt(Discriminant)/ (2*a))
    let x2 = (-b - Math.sqrt(Discriminant)/ (2*a))


    if (Array.isArray(array_of_abc) && array_of_abc.length == 3){

        if(a==0) return console.log(`Ощибка a - должно быть > 0 или < 0 `);

        if(Discriminant < 0){
            return console.log(`Уравнение имеет вид: ${a}x + ${b}x + ${c} = 0 \nКорней нет!`)
    
        } 
        else if(Discriminant==0){
            x1 = -b/(2*a)
            return console.log(`Уравнение имеет вид: ${a}x + ${b}x + ${c} = 0 \nКорень уравнения: ${x1}`)
        }
        else if(Discriminant >0){
            return console.log(`Уравнение имеет вид: ${a}x + ${b}x + ${c} = 0 \nКорни уравнения: ${x1} , ${x2}`)
        }
    
    }   
    else{
        return console.log(`Функция принимает только массив из 3х элементов!!!`);
    }

}
///