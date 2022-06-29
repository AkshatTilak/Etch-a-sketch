const container = document.getElementById("container");
const sizeInput = document.getElementById('gridSize');
const paint = document.getElementById('paint');
const rainbow = document.getElementById('rainbow');
const erasor = document.getElementById('erasor');
const clear = document.getElementById('clear');
const colorPicker = document.getElementById('colorPicker');
var sizeGiven = 16;
var hexVal = "black";
var mode = 'paint';
var mouseDown = false;


// functions
function makedivs(val){
    for(var i = 0 ; i< val; i++){
        const divs = document.createElement('div');
        divs.setAttribute('class', 'gridRow');
        divs.setAttribute('draggable', 'false');
        container.appendChild(divs); 
        for(var j = 0; j<val; j++){
            const cols = document.createElement('div');
            cols.setAttribute('class', 'gridCol');
            cols.setAttribute('draggable', 'false');
            cols.addEventListener('mouseover', colorChange);
            cols.addEventListener('mousedown', colorChange);
            divs.appendChild(cols);

        }
    }

};

function resetdivs(){
    container.innerHTML = '';
}

function colorChange(e){

    if( e.type === 'mouseover' && !mouseDown ) return;
    else if( mode === 'paint'){
         e.target.style.backgroundColor = hexVal;
    }
    else if( mode === 'rainbow'){
    const randomR = Math.floor(Math.random() * 256)
    const randomG = Math.floor(Math.random() * 256)
    const randomB = Math.floor(Math.random() * 256)
    e.target.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`
    }
    else if( mode === 'erasor'){
    e.target.style.backgroundColor = 'white';
    }
}


// EVENTS
makedivs(sizeGiven);
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);
paint.onclick = () => (mode = 'paint');
rainbow.onclick = () => (mode = 'rainbow');
erasor.onclick = () => (mode = 'erasor');
clear.onclick = () => (resetdivs(), makedivs(sizeGiven));
colorPicker.addEventListener('change', (e) =>{
    hexVal = e.target.value;
} )


sizeInput.addEventListener('change', (e) =>{
    sizeGiven = e.target.value;
    resetdivs();
    makedivs(sizeGiven);
} )
