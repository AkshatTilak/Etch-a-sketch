const container = document.getElementById("container");


function makedivs(val){
    for(var i = 0 ; i< val; i++){
        const divs = document.createElement('div');
        divs.setAttribute('class', 'gridRow');
        container.appendChild(divs); 
        for(var j = 0; j<val; j++){
            const cols = document.createElement('div');
            cols.setAttribute('class', 'gridCol');
            divs.appendChild(cols);

        }
    }

};

makedivs(64);