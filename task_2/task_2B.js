function myLocalScope(){
    'use strict'

    const myVar = 1;

    console.log('inside myLocalScope:  ', myVar);
}

myLocalScope();

console.log('outside myLocalScope: ', myVar );