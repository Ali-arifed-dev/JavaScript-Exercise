

const head = document.querySelector('h1')

    console.log(head);

const paragraph = document.querySelector('.prag');

    console.log(paragraph);


const buttons = document.querySelectorAll('button')[0];

    console.log(buttons)


function changeContent(){
    head.textContent = "Welcome to the DOM!";
}

function changeElement(){
    paragraph.innerHTML = `Hi Welcome to my Website <strong>consider to like my website</strong>`
}