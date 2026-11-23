





async function fetchData() {

    
try{

    console.log("start fetching data")

    const response = await fetch('https://jsonplaceholder.typicode.com/users');

    if(!response.ok){
        throw new Error ('HTTP error! status ${respone.status}');
    }
    
    const data =await response.json();
    console.log (data) 

}catch (Error){
    console.log("Error fetching data:", Error);
}
}

fetchData();






