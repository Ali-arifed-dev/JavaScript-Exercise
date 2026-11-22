

// promise

function fetchUserData() {
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            const success = true;
            if (success) {
                resolve({id: 0, name: "John smith"});
            } else{
                reject ("failed to fetch user data")
            }
        },2000);
    }) 
}

fetchUserData()
.then((data)=> console.log ("user data", data))

.catch((err) => console.log(err))









