



function changeImage(){
    const picture = document.querySelector("#image");

    const url = prompt("Please enter your image URL:");
    const borderColor = prompt("Please enter your desired border color:");
    const width = prompt("Please enter the width of the image (in pixels):");
    const height = prompt("Please enter the height of the image (in pixels):");
    const borderRadius = prompt("Please enter the border radius (in pixels):");

    picture.setAttribute('src', url);
    picture.style.border = `2px solid ${borderColor}`;
    picture.style.width = `${width}px`;
    picture.style.height = `${height}px`;
    picture.style.borderRadius = `${borderRadius}px`;
    picture.style.padding = "10px";
     image.style.backgroundColor = '#5c5f28';  
}

    
