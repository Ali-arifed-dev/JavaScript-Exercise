


let car = {
    make :"Toyoto",
    model :"Hilux",
    yeare : 2020,

    start : function() {
        console.log("the car has started" , this.make)
    }
}

console.log(car.make);
console.log(car.model);
console.log(car.yeare);

console.log(car.start())

