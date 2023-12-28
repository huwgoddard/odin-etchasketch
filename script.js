let mainContainer=document.querySelector('#main-container');

function mouseover(event) {
    if (event.ctrlKey === true) {
        event.target.style.backgroundColor='black';
    }
}

function setSize(canvasSideLength=16) {
    squareSideLength = 960/canvasSideLength;
    for (let i=0;i<canvasSideLength**2;i++) {
    let square=document.createElement('div');
        square.style.backgroundColor= 'pink';
        square.style.height=squareSideLength.toString()+'px';
        square.style.width=square.style.height;
        square.addEventListener('mouseover',mouseover)
        mainContainer.appendChild(square);
    }
}

setSize(16);
