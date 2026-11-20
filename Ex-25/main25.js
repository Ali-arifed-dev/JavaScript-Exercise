
// spread operator

const number = [1,2,3];

const allNumbers = [... number, 4,5,6]

console.log(allNumbers)


// Rest Operator

function multiply(...number) {
    return number.reduce((mult , num) => mult * num, 1);
}
console.log(multiply(20,10,2,8))


