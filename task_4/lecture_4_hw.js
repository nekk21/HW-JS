// 1. Напишите функцию printNumbers(from, to), которая выводит число каждую секунду, начиная от from и заканчивая to.

// Сделайте два варианта решения.

// Используя setInterval.
// Используя рекурсивный setTimeout.


// 1 sposob 4erez interval
function printNumbersByInterval(from, to) {
  const timer = setInterval(() => {
    console.log(from)

    if (from == to) {
      clearInterval(timer)
    }
    from++
  }, 20);
}

//2 sposob timeout

function printNumbersByTimeout(from, to) {
  setTimeout(fn = () => {
      console.log(from)
      if (from < to) {
          setTimeout(fn, 20);
    }
    from++;
  }, 20);
}



// 2. Напишите часы с использованием setInterval (с выводом в консоль), при каждом новом выводе (каждую секунду) очищать сонсоль (console.clear)

function clock() {
  // Code here
  // они мигают)))) 
    let date = new Date() 

    let  hours = date.getHours()
    if (hours < 10) hours = `0${hours}`
  
    let  minutes = date.getMinutes()
    if (minutes < 10) minutes = `0${minutes}`
  
    let  seconds = date.getSeconds()
    if (seconds < 10) seconds = `0${seconds}`

    console.clear()
    console.log(`${hours}:${minutes}:${seconds}`)

    setInterval(clock, 1000)
  }
  


// Следующие задачи могут быть сложными, поэтому можно найти решение в интернете и разобрать, как они работают

// *3. Результатом декоратора debounce(f, ms) должна быть обёртка, которая передаёт вызов f не более одного раза в ms миллисекунд. Другими словами, когда мы вызываем debounce, это гарантирует, что все остальные вызовы будут игнорироваться в течение ms.

function debounce(f, ms) {
  // Code here
  let wait = false

  return function(){
    if (wait) return;
    f.apply(this, arguments)
    wait = true
    setTimeout(() => wait = false, ms)
  }
}

let f = debounce(alert, 1000);

f(1); // выполняется немедленно
f(2); // проигнорирован

setTimeout( () => f(3), 100); // проигнорирован (прошло только 100 мс)
setTimeout( () => f(4), 1100); // выполняется
setTimeout( () => f(5), 1500); // проигнорирован (прошло только 400 мс от последнего вызова)

// *4. Создайте «тормозящий» декоратор throttle(f, ms), который возвращает обёртку, передавая вызов в f не более одного раза в ms миллисекунд.
// Те вызовы, которые попадают в период «торможения», игнорируются.

// Отличие от debounce – если проигнорированный вызов является последним во время «задержки», то он выполняется в конце.

function throttle(func, ms) {

  let isThrottled = false,
    savedArgs,
    savedThis

  function wrapper() {

    if (isThrottled) { 
      savedArgs = arguments
      savedThis = this
      return
    }

    func.apply(this, arguments)

    isThrottled = true

    setTimeout(function() {
      isThrottled = false
      if (savedArgs) {
        wrapper.apply(savedThis, savedArgs)
        savedArgs = savedThis = null
      }
    }, ms)
  }

  return wrapper;
}

function f(a) {
  console.log(a)
}

// f1000 передаёт вызовы f максимум раз в 1000 мс
let f1000 = throttle(f, 1000);

f1000(1); // показывает 1
f1000(2); // (ограничение, 1000 мс ещё нет)
f1000(3); // (ограничение, 1000 мс ещё нет)

// когда 1000 мс истекли ...
// ...выводим 3, промежуточное значение 2 было проигнорировано