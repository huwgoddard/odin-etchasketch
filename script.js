


let sideLength=16;

let mainContainer=document.querySelector('#main-container');

function mouseover(event) {
    let target = event.target;
    console.log(target);
    target.style.backgroundColor='black';
}

for (let i=0;i<sideLength**2;i++) {
    let square=document.createElement('div');
    square.style.backgroundColor= 'pink';
    square.style.height='60px';
    square.style.width='60px';
    square.addEventListener('mouseover',mouseover)
    mainContainer.appendChild(square);
    console.log(i);
}