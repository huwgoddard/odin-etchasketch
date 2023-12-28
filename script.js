let darkenFactor = 0;

function mouseover(event) {
    if (event.ctrlKey === true) {
        console.log(darkenFactor);
        event.target.style.backgroundColor=`rgba(10,10,10,${darkenFactor})`
        //event.target.style.backgroundColor=`rgba(${random256()},${random256()},${random256()},${darkenFactor})`;
        if (darkenFactor>=1) {
            darkenFactor=0;
        } else {
            darkenFactor+=0.1;
        }
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

function random256() {
    return Math.floor(Math.random()*256).toString();
}

function setSize(canvasSideLength=16) {
    darkenFactor=0;
    squareSideLength = 960/canvasSideLength;
    canvas = document.querySelector('#main-container');
    while (canvas.firstChild) {
        canvas.removeChild(canvas.lastChild);
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

