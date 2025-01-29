function onLoad(){
    document.documentElement.style.width = `${getWindowWidth()}px`;
    document.documentElement.style.height = `${getWindowHeight()}px`;
    document.getElementById("header-text").innerHTML = `Phillip Johnerud - ${getWindowWidth()}px`;
    if ( getWindowWidth() < 1370) {
        document.getElementById("main-top-text").style.width = "40rem";
        document.getElementById("code-example").style.width = "40rem";
        document.getElementById("sleepy-time").style.width = "30rem";
        document.getElementById("knowledge").style.width = "40rem";
        document.getElementById("main-bottom-text-r").style.marginTop = "0rem";
    }
    if ( getWindowWidth() > 1370) {
        document.getElementById("main-top-text").style.width = "20rem";
        document.getElementById("code-example").style.width = "20rem";
        document.getElementById("sleepy-time").style.width = "30rem";
        document.getElementById("knowledge").style.width = null;
        document.getElementById("main-bottom-text-r").style.marginTop = "30rem";
    }
    console.log( getWindowWidth())
}

function onResize(){
    document.documentElement.style.width = `${getWindowWidth()}px`;
    document.documentElement.style.height = `${getWindowHeight()}px`;
    document.getElementById("header-text").innerHTML = `Phillip Johnerud - ${getWindowWidth()}px`;
    if ( getWindowWidth() < 1370) {
        document.getElementById("main-top-text").style.width = "40rem";
        document.getElementById("knowledge").style.width = "40rem";
        document.getElementById("sleepy-time").style.width = "30rem";
        document.getElementById("main-bottom-text-r").style.marginTop = "0rem";
    }
    if ( getWindowWidth() > 1370) {
        document.getElementById("main-top-text").style.width = "20rem";
        document.getElementById("code-example").style.width = "20rem";
        document.getElementById("sleepy-time").style.width = "20rem";
        document.getElementById("knowledge").style.width = null;
        document.getElementById("main-bottom-text-r").style.marginTop = "30rem";
    }
    console.log( getWindowWidth())
}
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

function getCSSVariable(name, r) {
    const rs = getComputedStyle(r);
    return rs.getPropertyValue(name);
}

function setCSSVariable(name, color, r) {
    r.style.setProperty(name, color)
}