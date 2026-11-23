

function operate(a, b, callback){
    return callback(a,b)
}
    
function add(a,b){
    return a+b;
}

function subtract(a,b) {
    return a-b;
}

function mult(a,b){
    return a*b;
}

function div(a,b){
    return a/b;
}

console.log("addition", operate(2,3, add));
console.log("substraction", operate(20,10, subtract));
console.log("multiply", operate(20,10, mult));
console.log("divide", operate(20,10, div));
