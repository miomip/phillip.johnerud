
function somethingChange(){
    let x = getById("blue-code");
    let y = getById("green-code");
    let f = getById("orange-code");
    let g = getById("magenta-code");
    x.id = "white-code";
    y.id = "white-code";
    f.id = "white-code";
    g.id = "white-code";
}

function getById(text){
    return document.getElementById(text);
}

function getWindowWidth(){
    return window.innerWidth;
}

function getWindowHeight(){
    return window.innerHeight;
}
