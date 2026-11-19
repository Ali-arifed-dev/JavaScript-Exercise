

const people = [
    { name: "Alice", age: 30, city: "Wonderland" },
    { name: "Bob", age: 30, city: "Builderland" },
    { name: "Charlie", age: 35, city: "Chocolate Factory" }
];

for (const key in people) {

    for (const property in people[key]) {
        console.log(property + ": " + people[key][property]);
    }

    console.log("---");
}