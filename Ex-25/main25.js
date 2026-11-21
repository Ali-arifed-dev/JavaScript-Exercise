

// Blocking (Synchronous)

function fetchUserDataSync() {
    alert("Fetching user data...");
    return{ id: 2, name: "Abdi Ali"};
}

console.log("II Daabac Marka hore qoraalkan");
const user = fetchUserDataSync();
console.log("User data:", user);

console.log("II Daabac Fariintan ugu Danbeyso");


console.log("--------")

// Non-Blocking (Asynchronous)

function getUserData(callback) {

    setTimeout(() => {
        console.log("Print After 3 Second");
    },3000);
}

console.log("ii daabac line kan koowaad");

getUserData();

console.log("ii daabac line kan u danbeeyo");







