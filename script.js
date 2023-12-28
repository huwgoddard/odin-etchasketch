function mouseover(event) {
    if (event.ctrlKey === true) {
        event.target.style.backgroundColor='black';
    }
}

function clickSetSize() {
    let user = prompt('enter size length < 100');
    if (user > 100 || user <= 0) {
        alert('Enter value greater than 0 and less than 100');
    } else {
        setSize(parseInt(user));
    }
}

const sizerButton = document.querySelector('#sizer');

sizerButton.addEventListener('click', clickSetSize);

function setSize(canvasSideLength=16) {
    squareSideLength = 960/canvasSideLength;
    canvas = document.querySelector('#main-container');
    while (canvas.firstChild) {
        canvas.removeChild(canvas.lastChild);
        console.log('yip')
    }
    for (let i=0;i<canvasSideLength**2;i++) {
    let square=document.createElement('div');
        square.style.backgroundColor= 'pink';
        square.style.height=squareSideLength.toString()+'px';
        square.style.width=square.style.height;
        square.addEventListener('mouseover',mouseover)
        canvas.appendChild(square);
    }
}

setSize();

