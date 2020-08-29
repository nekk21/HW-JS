var myGlobal = 10;

(function fun1(){
    
    globalThis.oopsGlobal = 5 
})();


(function fun2(){
    var output = ''
    if(typeof myGlobal != undefined){
        output += ' myGlobal: ' + myGlobal + '\n'
    }
    if(typeof oopsGlobal != undefined){
        output += ' oopsGlobal:  '+ oopsGlobal
    }
    console.log(output);
})();
