





async function fetchData() {

    console.log("start fetching data")

    const response = await fetch('data.json');

    // const response = await fetch('https://jsonplaceholder.typicode.com/users');
    
    const data =await response.json();

    console.log ("response: ", data)  


    

}

fetchData();






